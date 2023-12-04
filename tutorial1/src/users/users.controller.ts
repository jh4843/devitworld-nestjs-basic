import {
  Controller,
  Get,
  Post,
  Param,
  Req,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';

import { UsersService } from './users.service';

import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.add(createUserDto);
  }

  // pipe test
  @Get('find/:index')
  async findOne(@Param('index', ParseIntPipe) index: number) {
    return this.usersService.findOne(index);
  }

  @Get('all-users')
  async findAll(@Req() request: Request): Promise<User[]> {
    console.log(`(Handler) Incoming Request on ${request.path}`);
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUserById(@Param() params): Promise<string> {
    return `This user has id ${params.id}`;
  }
}
