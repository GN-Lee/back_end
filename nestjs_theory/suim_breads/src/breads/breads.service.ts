import { Injectable } from '@nestjs/common';
import { CreateBreadDto } from './dto/create-bread.dto';
import { UpdateBreadDto } from './dto/update-bread.dto';
import { Bread } from './entities/bread.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BreadsService {
  constructor(
    @InjectRepository(Bread)
    private breadRepository: Repository<Bread>,
  ) {}

  create(createBreadDto: CreateBreadDto) {
    const bread = this.breadRepository.create(createBreadDto);
    this.breadRepository.save(bread);
    return '신메뉴 나왔다. 다들 하나씩 사라';
  }

  findAll() {
    return this.breadRepository.find();
  }

  findOne(id: number) {
    return this.breadRepository.findOneBy({ id });
  }

  update(id: number, updateBreadDto: UpdateBreadDto) {
    return `This action updates a #${id} bread`;
  }

  remove(id: number) {
    return `This action removes a #${id} bread`;
  }
}
