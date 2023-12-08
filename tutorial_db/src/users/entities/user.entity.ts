import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['userId'])
export class User {
  @PrimaryGeneratedColumn()
  key: number;

  @Column()
  userId: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column()
  age: number;

  @Column()
  email: string;
}
