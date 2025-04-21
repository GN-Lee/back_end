import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: '고객 이름은 필수 입력 사항입니다.' })
  @IsString({ message: '고객 이름은 문자열로 입력해주세요.' })
  @Length(1, 20, { message: '고객 이름은 1~20자로 입력해주세요.' })
  name: string;

  @IsNotEmpty({ message: '고객 등급은 필수 입력 사항입니다.' })
  @IsString({ message: '고객 등급은 문자열로 입력해주세요.' })
  rank: 'silver' | 'gold' | 'platinum' | 'VIP' | 'VVIP';
}
