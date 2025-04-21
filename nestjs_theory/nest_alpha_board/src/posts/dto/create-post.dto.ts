import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: '제목을 입력하세요.' })
  @MaxLength(50, { message: '제목은 50글자 이하입니다.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '뭐든 써라' })
  contents: string;

  @IsInt()
  @Min(1)
  @Type(() => Number) // 이거 붙혀야 클라이언트 String을 Number로 바꿔줌
  author: number;
}
