import { Module } from '@nestjs/common';
import { UserSeederService } from './users.services';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../../modules/users/entities/users.entity';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserSeederService],
  exports: [UserSeederService],
})
export class UserSeederModule {}
