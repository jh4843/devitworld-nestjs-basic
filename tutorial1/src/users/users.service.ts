import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  add(user: User) {
    this.users.push(user);
  }

  findOne(index: number): User {
    return this.users[index];
  }

  findAll(): User[] {
    return this.users;
  }
}
