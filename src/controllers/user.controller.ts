import { Controller, Get } from '@nestjs/common';
import { User } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('users')
export class UserController {
  constructor() {}

  @Get()
  async getHello(): Promise<User[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .select('*');

    if (response.error) {
      return [];
    }
    const users = response.data as User[];
    return users;
  }
}
