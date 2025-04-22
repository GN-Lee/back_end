import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestBookDto } from './dto/create-guest-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GuestBook } from './entities/guest-book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuestBooksService {
  @InjectRepository(GuestBook)
  private readonly guestBookRepository: Repository<GuestBook>;

  async create(createGuestBookDto: CreateGuestBookDto) {
    const guestBook = this.guestBookRepository.create(createGuestBookDto);
    await this.guestBookRepository.save(guestBook);
    return {
      success: true,
      message: '방명록이 작성되었습니다.',
      statusCode: 201,
      data: guestBook,
    };
  }

  async findAll() {
    const findAll = await this.guestBookRepository.find({
      order: { createdAt: 'DESC' },
    });
    return {
      success: true,
      message: '방명록 목록을 조회했습니다.',
      data: findAll,
    };
  }

  async findOne(id: number) {
    const findOne = await this.guestBookRepository.findOne({
      where: { id },
    });
    if (!findOne) {
      throw new NotFoundException('존재하지 않는 게스트입니다.');
    }
    return {
      success: true,
      message: '방명록을 찾았습니다.',
      statusCode: 200,
      data: findOne,
    };
  }

  async remove(id: number) {
    const result = await this.guestBookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('삭제할 방명록이 존재하지 않습니다.');
    }
    return { success: true, message: '방명록이 삭제되었습니다.' };
  }
}
