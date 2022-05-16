import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { ConnectionOptions } from 'sequelize';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectConnection() private readonly connection: ConnectionOptions,
  ) {}

  getDbHandle(): ConnectionOptions {
    return this.connection;
  }
}
