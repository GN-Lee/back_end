import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    this.userRepository.save(user);
    return '회원가입이 완료되었습니다.';
  }

  async findAll() {
    const allUsers = await this.userRepository.find();
    return {
      success: true,
      message: '모든 유저 목록을 불러옵니다.',
      data: allUsers,
    };
  }

  async findOne(id: number) {
    const findUser = await this.userRepository.findOne({ where: { id } });
    return {
      success: true,
      message: `${id}유저를 불러옵니다.`,
      data: findUser,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
