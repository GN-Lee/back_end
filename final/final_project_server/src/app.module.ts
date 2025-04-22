import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestBooksModule } from './guest-books/guest-books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    GuestBooksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'final',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
