import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '그래도 뭐라도 적어야지....' })
  @IsString({ message: '문자로 입력해주세요!' })
  @MinLength(2, { message: '희귀닉은 다 먹혔다ㅋㅋ' })
  nickname: string;
}
