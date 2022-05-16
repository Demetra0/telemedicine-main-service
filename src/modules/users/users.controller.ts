import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':snils')
  findOne(@Param('snils') snils: string) {
    return this.usersService.findOne(snils);
  }

  @Patch(':snils')
  update(@Param('snils') snils: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(snils, updateUserDto);
  }

  @Delete(':snils')
  remove(@Param('snils') snils: string) {
    return this.usersService.remove(snils);
  }
}
