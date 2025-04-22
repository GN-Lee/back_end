import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class AllFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const message = exception.message;
    const response = host.switchToHttp().getResponse();
    response.json({
      success: false,
      message,
      error: exception.getResponse(),
      code: status,
      timestamp: new Date().toISOString(),
    });
  }
}
