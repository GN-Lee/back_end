import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: '빈 공간으로 등록할 수 없음' })
  @IsString({ message: '문자열로 입력해주세요.' })
  @MinLength(1, { message: '최소 1글자 이상 적어주세요' })
  @MaxLength(150, { message: '최대 150자 까지만 작성할 수 있습니다.' })
  content: string;

  @IsInt({ message: '숫자만 가능합니다.' })
  @IsNotEmpty({ message: '값을 입력해주세요' })
  @Min(1)
  author: number;
}
