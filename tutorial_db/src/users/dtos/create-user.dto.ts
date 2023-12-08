import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  userId: string;

  @IsString()
  password: string;

  @IsString()
  nickName: string;

  @IsNumber()
  age: number;

  @IsOptional()
  @IsEmail()
  email: string;
}
