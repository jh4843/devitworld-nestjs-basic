import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entity
import { User } from './entities/user.entity'; // import User entity

// DTO
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

import { LoggerService } from '../core/logger/logger.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private myLogger: LoggerService,
  ) {}

  // get
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findByUserId(userId: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { userId: userId } });
  }

  // create
  async create(user: CreateUserDTO) {
    await this.usersRepository.save(user);
  }

  // update
  async updateByUserId(
    userId: string,
    user: UpdateUserDTO,
  ): Promise<User | null> {
    const preUser = await this.findByUserId(userId);
    const updateUser = { ...preUser, ...user }; // overwrite preUser with user

    await this.usersRepository.save(updateUser);

    return updateUser;
  }

  // delete
  async removeByUserId(userId: string): Promise<void> {
    const targetUser = await this.findByUserId(userId);

    await this.usersRepository.delete(targetUser.key);
  }
}
