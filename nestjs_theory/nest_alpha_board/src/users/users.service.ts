import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    this.userRepository.save(newUser);
    return { success: true, messsage: `${newUser.nickname} 생성됨` };
  }

  async findAll() {
    const allUser = await this.userRepository.find();
    return { success: true, message: `모든 유저`, data: allUser };
  }

  async findOne(id: number) {
    const targetUser = await this.userRepository.findOne({ where: { id } });
    return { success: true, MessageChannel: `${id} 유저`, data: targetUser };
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { success: true, message: `${id} 삭제됨` };
  }
}
