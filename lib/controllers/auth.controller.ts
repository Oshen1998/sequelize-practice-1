"use strict";
import Ajv from "ajv";
import { IRegistration } from "./../models/auth/auth.interface";
import { RegistrationSchema } from "./../validators/auth.validators";
import {
    SuccessResponseHandler,
    UnprocessableEntityHandler,
} from "./../services/common/httpRequestHandlers.service";
import { Request, Response } from "express";
import { AuthServices } from "./../services/database/auth.service";

export class AuthController {
    private ajv = new Ajv();
    private authService: AuthServices = new AuthServices();

    public userRegistration(req: Request, res: Response) {
        const payload = req.body;
        // const validator = this.ajv.compile(payload);
        const isValid = true;

        if (isValid) {
            this.authService.createUser(
                payload as IRegistration,
                (response, error) => {
                    if (response && !error) {
                        SuccessResponseHandler(res, response, "User Created Successfully!");
                    } else {
                        UnprocessableEntityHandler(res, 'ER_BAD_FIELD_ERROR', error);
                    }
                    console.log(JSON.stringify(response, null, 2));

                }
            );
        } else {
            UnprocessableEntityHandler(res);
        }
    }
}
