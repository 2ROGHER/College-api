import { Injectable } from '@nestjs/common';

/**
 * This is a provider to inject into any class to be used for that class.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFavorites(): string {
    return 'My favorite things are:';
  }
}
