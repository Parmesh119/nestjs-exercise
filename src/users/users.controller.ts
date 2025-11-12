import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post('create/:id')
  createUser(
    @Param('id') id: string,
    @Body() { name }: { name: string },
  ): string {
    if (!id) {
      return 'ID is required!';
    } else if (typeof id !== 'string') {
      throw new Error('ID must be a string!');
    } else if (!name) {
      return 'Name is required!';
    } else if (typeof name !== 'string') {
      throw new Error('Name must be a string!');
    }
    return this.usersService.createUser(id, name);
  }
}
