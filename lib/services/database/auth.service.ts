import { IRegistration } from "./../../models/auth/auth.interface";
import { AuthModel } from "./../../models/auth/auth.model";


export class AuthServices {

    public async createUser(payload: IRegistration, callback:(response: any, error?: any) => void){
        await AuthModel.create(payload).then((response) =>{
            return callback(response, false);
        }).catch((error)=>{
            return callback({} as IRegistration, error);
        })

    }
}