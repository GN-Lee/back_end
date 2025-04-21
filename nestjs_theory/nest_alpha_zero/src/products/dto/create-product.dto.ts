import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

// price, quantity

export class CreateProductDto {
  @IsNotEmpty({ message: 'id는 필수 입력 사항입니다.' })
  @IsNumber({}, { message: 'id는 숫자로 입력해주세요.' })
  id: number;
  @IsNotEmpty({ message: 'name은 필수 입력 사항입니다.' })
  @IsString({ message: 'name은 문자로 입력해주세요.' })
  @Length(1, 10, { message: 'name은 1~10글자 이하로 입력해주세요.' })
  name: string; // 1~10 글자까지
  @IsNotEmpty({ message: 'price는 필수 입력 사항입니다.' })
  @IsNumber({}, { message: 'price는 숫자로 입력해주세요.' })
  @Min(1, { message: 'price는 1원 이상 입력해주세요.' })
  @Max(10000000, { message: 'price는 10,000,000원 이하로 입력해주세요.' })
  price: number;
}
