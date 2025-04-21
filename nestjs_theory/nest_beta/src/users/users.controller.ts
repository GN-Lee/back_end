import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  ForbiddenException,
  Get,
  Param,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Query,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailPipe } from 'src/email/email.pipe';
import { BreadPipe } from 'src/bread/bread.pipe';
import { NotFoundError } from 'rxjs';

enum LolPostion {
  TOP = 'Top',
  JUNGGLE = 'JG',
  MIDDLE = 'MD',
  AD = 'AD',
  BOTTOM = 'Bottom',
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/kim/:id')
  findKim(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  @Get('/lee')
  findLee(@Query('isHuman', ParseBoolPipe) isHuman: boolean) {
    return {
      isHuman,
    };
  }

  @Get('/park/:position')
  findPark(
    @Param('position', new ParseEnumPipe(LolPostion)) position: LolPostion,
  ) {
    return {
      position,
    };
  }

  @Get('/choi')
  findChoi(
    @Query('count', new DefaultValuePipe(1), ParseIntPipe) count: number,
    @Query('min', new DefaultValuePipe(100), ParseIntPipe) min: number,
  ) {
    return {
      count,
      min,
    };
  }

  @Post('/jeon')
  @UsePipes(new ValidationPipe({ transform: true }))
  findJeon(@Body() dto: CreateUserDto) {
    return { dto };
  }

  @Post('/bro')
  @UsePipes(EmailPipe)
  findBro(@Body() email: string) {
    return {
      email,
    };
  }

  @Post('/cafe')
  @UsePipes(BreadPipe)
  findCafe(@Body() bread: string, coffee: string) {
    return {
      bread,
      coffee,
    };
  }

  @Get('/jiheon')
  findJiheon() {
    throw new UnauthorizedException('아니 형 이게 맞아????');
    return { name: '지헌이형' };
  }
}
