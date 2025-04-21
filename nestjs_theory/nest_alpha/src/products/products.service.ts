import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return '상품 생성이 완료되었습니다.';
  }

  findAll() {
    return `모든 상품을 조회합니다.`;
  }

  findOne(id: number) {
    return `상품 번호 ${id}를 조회합니다.`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `상품 번호 ${id}를 수정합니다.`;
  }

  remove(id: number) {
    return `상품 번호 ${id}를 삭제합니다.`;
  }
}
