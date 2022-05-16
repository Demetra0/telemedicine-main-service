import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async create(createUserDto: CreateUserDto): Promise<User | undefined> {
    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[] | undefined> {
    const user = await this.userRepository.findAll({
      include: { all: true },
    });
    return user;
  }

  async findOne(snils: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { snils: snils },
    });

    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(snils: string, updateUserDto: UpdateUserDto): Promise<object> {
    const [numberOfAffectedRows, [updatedUser]] =
      await this.userRepository.update(updateUserDto, {
        where: { snils: snils },
        returning: true,
      });

    return { numberOfAffectedRows, updatedUser };
  }

  async remove(snils: string): Promise<number> {
    return await this.userRepository.destroy({
      where: { snils: snils },
    });
  }
}
