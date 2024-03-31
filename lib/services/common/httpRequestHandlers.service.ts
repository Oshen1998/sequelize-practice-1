import { ResponseCodesEnum } from "../../constants/common/response.constants";
import { Response } from "express";

export function SuccessResponseHandler(res: Response, data: any, message?: string) {
  return res
    .status(ResponseCodesEnum.SUCCESS)
    .json({
      status: ResponseCodesEnum.SUCCESS,
      message: message ?? "SUCCESS",
      data,
    });
}

export function BadRequestHandler(res: Response, message?: string) {
    return res
      .status(ResponseCodesEnum.BAD_REQUEST)
      .json({
        status: ResponseCodesEnum.BAD_REQUEST,
        message: message ?? "BAD_REQUEST",
      });
}

export function InternalServerErrorHandler(res: Response, message?: string) {
    return res
      .status(ResponseCodesEnum.INTERNAL_SERVER_ERROR)
      .json({
        status: ResponseCodesEnum.INTERNAL_SERVER_ERROR,
        message: message ?? "INTERNAL_SERVER_ERROR",
      });
}

export function UnprocessableEntityHandler(res: Response, message?: string, info?:any) {
    return res
      .status(ResponseCodesEnum.UNPROCESSABLE_ENTITY)
      .json({
        status: ResponseCodesEnum.UNPROCESSABLE_ENTITY,
        message: message ?? "UNPROCESSABLE_ENTITY",
        info
      });
}

export function DuplicateInformationHandler(res: Response,message?:string, info?:any) {
  return res
    .status(ResponseCodesEnum.DUPLICATED_DATA)
    .json({
      status: ResponseCodesEnum.DUPLICATED_DATA,
      message:  message ?? "DUPLICATED DATA",
      info
    });
}
