"use strict";
import Ajv from "ajv";
import {
  SuccessResponseHandler,
  UnprocessableEntityHandler,
} from "../services/common/requestHandler.service";
import { Request, Response } from "express";
import { AuthServices } from "./../services/database/auth.service";
import { IRegistrationRequest } from "models/auth/auth.interface";

export class AuthController {
  private ajv = new Ajv();
  private authService: AuthServices = new AuthServices();

  public userRegistration(req: Request, res: Response) {
    const payload = req.body;
    const isValid = true;

    if (isValid) {
      this.authService.createUser(
        payload as IRegistrationRequest,
        (response, error) => {
          if (response && !error) {
            SuccessResponseHandler(res, response, "User Created Successfully!");
          } else {
            UnprocessableEntityHandler(res, "ER_BAD_FIELD_ERROR", error);
          }
        }
      );
    } else {
      UnprocessableEntityHandler(res);
    }
  }
}
