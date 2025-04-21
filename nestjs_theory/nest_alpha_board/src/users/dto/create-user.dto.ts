import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '닉네임 하나 이상을 입력하시오' })
  @IsString()
  @Length(1, 30, { message: '닉네임은 1~30글자 내외입니다.' })
  nickname: string;
}
