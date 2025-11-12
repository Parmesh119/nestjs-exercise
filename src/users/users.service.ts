import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!';
  }
  createUser(id: string, name: string): string {
    return `Create User ${id} with name ${name}!`;
  }
}
