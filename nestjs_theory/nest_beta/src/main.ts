import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogginInterceptor } from './loggin/loggin.interceptor';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // Dto에 명시된 키만 남기고 나머지는 자동 삭제
      forbidNonWhitelisted: true, // 허용되지 않은 키가 있으면 즉시 400 에러
    }),
  );
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new LogginInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
