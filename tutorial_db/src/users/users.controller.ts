import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';

// Entity
import { User } from './entities/user.entity'; // import User entity

// DTO
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findByUserId(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findByUserId(id);
  }

  @Get()
  async findByQuery(@Query('id') id: string): Promise<User | null> {
    return this.usersService.findByUserId(id);
  }

  @Post()
  async create(@Body() user: CreateUserDTO) {
    return this.usersService.create(user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.removeByUserId(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDTO,
  ): Promise<void> {
    const updatedUser: User = await this.usersService.updateByUserId(id, user);
    return Object.assign({
      data: { ...updatedUser },
      statusCode: 200,
      message: 'success',
    });
  }
}
