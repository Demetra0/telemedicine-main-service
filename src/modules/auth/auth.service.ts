import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(userEmail: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(userEmail);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
