import { ResponseCodesEnum } from "../constants/common/response.constants";
import { Application, Request, Response } from "express";


class WildRoutes{
    public route(app: Application) {
        app.all('*', (req: Request, res: Response) => {
            res.status(200).json({message: 'Not Found Route', status: ResponseCodesEnum.NOT_FOUND});
        });
    } 
}

export default WildRoutes;