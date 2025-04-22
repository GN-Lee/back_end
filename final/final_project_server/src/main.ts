import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // 모든 출처 허용 (프론트엔드 주소)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 모든 메서드 허용
    credentials: true, // 인증 정보 허용
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
