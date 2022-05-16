import { Injectable } from '@nestjs/common';
import { User } from '../../../modules/users/entities/users.entity';
import { User as IUser } from '../../../modules/users/interfaces/user.interface';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserSeederService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(users: IUser[]): Promise<Array<Promise<User>>> {
    return users.map(async (user: IUser) => {
      return await this.userRepository.create(user).then();
    });
  }
}
