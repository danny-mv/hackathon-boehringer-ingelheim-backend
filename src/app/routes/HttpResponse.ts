/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Response } from 'express'
import httpStatus from 'http-status'

export class HttpResponse {
  static Ok(res: Response, data?: unknown): Response {
    return res.status(httpStatus.OK).json(data)
  }

  static Created(res: Response, data?: unknown): Response {
    return res.status(httpStatus.CREATED).json(data)
  }

  static NoContent(res: Response): Response {
    return res.status(httpStatus.NO_CONTENT).end()
  }

  static BadRequest(res: Response, data?: unknown): Response {
    return res.status(httpStatus.BAD_REQUEST).json({
      error: data,
    })
  }

  static NotFound(res: Response, data?: unknown): Response {
    return res.status(httpStatus.NOT_FOUND).json({
      error: data,
    })
  }

  static Unauthorized(res: Response, data?: unknown): Response {
    return res.status(httpStatus.UNAUTHORIZED).json({
      error: data,
    })
  }

  static UnprocessableContent(res: Response, data?: unknown): Response {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
      error: data,
    })
  }

  static Forbidden(res: Response, data?: unknown): Response {
    return res.status(httpStatus.FORBIDDEN).json({
      error: data,
    })
  }

  static Error(res: Response, data?: unknown): Response {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      error: data,
    })
  }
}
