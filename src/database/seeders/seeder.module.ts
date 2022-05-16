import { Module } from '@nestjs/common';
import { PostgresDatabaseProviderModule } from '../../providers/database/postgres/provider.module';
import { Logger } from '../../common/utils/logger';
import { Seeder } from './seeder';
import { UserSeederModule } from './user/users.module';
import { UsersModule } from '../../modules/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    PostgresDatabaseProviderModule,
    UserSeederModule,
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
