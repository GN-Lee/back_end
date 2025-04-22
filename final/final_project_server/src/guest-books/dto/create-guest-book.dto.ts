import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateGuestBookDto {
  @IsNotEmpty({ message: '작성해라 진짜ㅡㅡ' })
  @IsString({ message: '니 이름이 숫자냐? 문자로 써라' })
  @MinLength(1, { message: '이름은 1자 이상 적어주셈' })
  @MaxLength(20, { message: '이름은 20자 이하로 적어주셈' })
  author: string;

  @IsNotEmpty({ message: '작성해라 진짜ㅡㅡ' })
  @IsString({ message: '니 이름이 숫자냐? 문자로 써라' })
  @MinLength(1, { message: '댓글은 1자 이상 적어주셈' })
  @MaxLength(500, { message: '댓글은 500자 이하로 적어주셈' })
  content: string;

  // @Type(() => Number)
  // @IsNumber()
  // likes: number;
}
