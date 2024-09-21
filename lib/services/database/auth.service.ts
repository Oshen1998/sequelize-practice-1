import { IRegistrationRequest } from "./../../models/auth/auth.interface";
import { AuthModel } from "./../../models/auth/auth.model";

export class AuthServices {
  public async createUser(
    payload: IRegistrationRequest,
    callback: (response: any, error?: any) => void
  ) {
    await AuthModel.create(payload)
      .then((response) => {
        return callback(response, false);
      })
      .catch((error) => {
        return callback({} as IRegistrationRequest, error);
      });
  }
}
