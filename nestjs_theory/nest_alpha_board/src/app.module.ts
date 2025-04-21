import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RepliesModule } from './replies/replies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'board', // DB
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 전체 엔티티 등록
      // synchronize: true, // 개발 환경에서만 true (자동 테이블 생성)
    }),
    UsersModule,
    PostsModule,
    RepliesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
