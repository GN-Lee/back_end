import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '떡상 가즈아!!!!!';
  }
  getDog(): string {
    return '시베리안 허스키';
  }
}
