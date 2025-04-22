import { Module } from '@nestjs/common';
import { GuestBooksService } from './guest-books.service';
import { GuestBooksController } from './guest-books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestBook } from './entities/guest-book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestBook])],
  controllers: [GuestBooksController],
  providers: [GuestBooksService],
})
export class GuestBooksModule {}
