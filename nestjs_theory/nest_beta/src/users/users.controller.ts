import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  ForbiddenException,
  Get,
  NotFoundException,
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
import { BroException } from 'src/all/bro';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

enum LolPostion {
  TOP = 'Top',
  JUNGGLE = 'JG',
  MIDDLE = 'MD',
  AD = 'AD',
  BOTTOM = 'Bottom',
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '김씨 찾기' })
  @ApiResponse({ status: 200, description: '김씨를 찾아부러쓰' })
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
    throw new BroException('아니 형 이게 맞는거야??', 400);
  }

  @Get('/right')
  findRight() {
    throw new BadRequestException('극우 현서ㄷㄷ;;');
  }

  @Get('/well')
  findWell() {
    throw new NotFoundException('잘하자 준타이야....');
  }
}
