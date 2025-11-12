import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getHelloFromPost(): string {
    return 'Hello from Post Service!';
  }
}
