import { ResponseCodesEnum } from "../constants/common/response.constants";
import { Application, Response } from "express";

class WildRoutes {
  public route(app: Application) {
    app.all("*", (res: Response) => {
      res
        .status(200)
        .json({
          message: "Not Found Route",
          status: ResponseCodesEnum.NOT_FOUND,
        });
    });
  }
}

export default WildRoutes;
