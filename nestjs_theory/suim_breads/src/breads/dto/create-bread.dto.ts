import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateBreadDto {
  @IsNotEmpty({ message: '빵 이름은 필수 입력 사항입니다.' })
  @IsString({ message: '빵 이름은 문자열로 입력해주세요.' })
  @Length(1, 20, { message: '빵 이름은 1~20자로 입력해주세요.' })
  name: string;

  @IsNotEmpty({ message: '빵 가격은 필수 입력 사항입니다.' })
  @IsNumber({}, { message: '빵 가격은 숫자로 입력해주세요.' })
  @Min(0, { message: '빵 가격은 0원 이상으로 입력해주세요.' })
  @Max(10000, { message: '빵 가격은 10000원 이하로 입력해주세요.' })
  price: number;
}
