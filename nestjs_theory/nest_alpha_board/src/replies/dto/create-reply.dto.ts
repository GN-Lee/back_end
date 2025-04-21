import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateReplyDto {
  @IsString()
  @IsNotEmpty({ message: '제목을 입력하세요.' })
  @MaxLength(200, { message: '제목은 200글자 이하입니다.' })
  content: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  author: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  post: number;
}
