import { AuthController } from "./../controllers/auth.controller";
import { ResponseCodesEnum } from "../constants/common/response.constants";
import { Application, Request, Response } from "express";


class UserRoutes{
    private authController: AuthController = new AuthController();
    public route(app: Application) {
        app.get('', (req: Request, res: Response) => {
            res.status(200).json({message: 'User Routes Work', status: ResponseCodesEnum.SUCCESS});
        });

        app.post('/auth', (req: Request, res: Response) => {
            this.authController.userRegistration(req, res);
        });
    } 
}

export default UserRoutes;