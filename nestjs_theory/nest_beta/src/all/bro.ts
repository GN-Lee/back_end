import { HttpException, HttpStatus } from '@nestjs/common';

export class BroException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super({ success: false, message }, status);
  }
}
