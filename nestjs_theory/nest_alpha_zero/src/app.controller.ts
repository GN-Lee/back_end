import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 라우터
@Controller('/bitcoin')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/up')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/dog')
  getDog(): string {
    return this.appService.getDog();
  }
}
