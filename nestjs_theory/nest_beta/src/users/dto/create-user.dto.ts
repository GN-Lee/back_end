import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 20)
  name: string;

  @IsInt()
  @Min(0)
  @Type(() => Number)
  age: number;

  // 첫번째 글자는 대문자, 나머지는 소문자
  @IsString()
  email: string;

  @IsString()
  bread: string;

  @IsString()
  coffee: string;
}
