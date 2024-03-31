"use strict";
import Ajv from "ajv";
import { IRegistration } from "./../models/auth/auth.interface";
import { RegistrationSchema } from "./../validators/auth.validators";
import {
    DuplicateInformationHandler,
    SuccessResponseHandler,
    UnprocessableEntityHandler,
} from "./../services/common/httpRequestHandlers.service";
import { Request, Response } from "express";
import { AuthServices } from "./../services/database/auth.service";
import connection from "./../instance";
import { QueryTypes } from "sequelize";
import { encryptingPassword } from "./../middlewares/cipher";

export class AuthController {
    private ajv = new Ajv();
    private authService: AuthServices = new AuthServices();

    public async userRegistration(req: Request, res: Response) {
        const validator = this.ajv.compile(RegistrationSchema);
        const isValid = validator(req.body);

        if (isValid) {
            const payload = await this.registrationPayloadFormatter(req.body as IRegistration);
            const [table] = await connection.query(
                "SELECT table_name FROM information_schema.tables WHERE table_schema =:schema AND table_name =:table",
                {
                    type: QueryTypes.SELECT,
                    replacements: {
                        schema: 'restaurants',
                        table: 'auth'
                    }
                }
            );
            if (table) {
                await connection
                    .query('SELECT * FROM auth WHERE nic=:nicValue OR email=:emailValue', {
                        replacements: { nicValue: payload.nic, emailValue: payload.email },
                        type: QueryTypes.SELECT,
                    })
                    .then(([results]) => {
                        if (!results) {
                            this.authService.createUser(
                                payload,
                                (response, error) => {
                                    if (response && !error) {
                                        SuccessResponseHandler(res, response, "User Created Successfully!");
                                    } else {
                                        UnprocessableEntityHandler(res, 'ER_BAD_FIELD_ERROR_1', error);
                                    }
                                }
                            );
                        } else {
                            DuplicateInformationHandler(res, "User already Existing nic or email", payload.nic);
                        }
                    }).catch((error) => {
                        UnprocessableEntityHandler(res, 'BAD_FIELD_ERROR_2', error)
                    })
            } else {
                this.authService.createUser(
                    payload,
                    (response, error) => {
                        if (response && !error) {
                            SuccessResponseHandler(res, response, "User Created Successfully!");
                        } else {
                            UnprocessableEntityHandler(res, 'ER_BAD_FIELD_ERROR_3', error);
                        }
                    }
                );
            }

        } else {
            UnprocessableEntityHandler(res);
        }
    }

    private async registrationPayloadFormatter(payload: IRegistration): Promise<IRegistration> {
        const { password, ...rest } = payload;
        const hashedPassword = await encryptingPassword(password);

        return {password: hashedPassword, ...rest} as IRegistration;
    }
}
