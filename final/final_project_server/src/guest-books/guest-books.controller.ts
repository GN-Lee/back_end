import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GuestBooksService } from './guest-books.service';
import { CreateGuestBookDto } from './dto/create-guest-book.dto';

@Controller('guestbooks')
export class GuestBooksController {
  constructor(private readonly guestBooksService: GuestBooksService) {}

  @Post()
  create(@Body() createGuestBookDto: CreateGuestBookDto) {
    return this.guestBooksService.create(createGuestBookDto);
  }

  @Get()
  findAll() {
    return this.guestBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestBooksService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestBooksService.remove(+id);
  }
}
