import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { UsersModule } from '../src/modules/users/users.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { User as IUser } from '../src/modules/users/interfaces/user.interface';
import { users } from '../src/database/seeders/user/data';
import { User } from '../src/modules/users/entities/users.entity';

describe('UsersController (e2e)', () => {
  let app: INestApplication;

  const mockUser: IUser = users[0];

  const mockUserRepository = {
    findAll: jest.fn().mockReturnValue([mockUser]),
    findOne: jest.fn().mockReturnValue(mockUser),
    create: jest.fn().mockReturnValue(mockUser),
    update: jest.fn().mockReturnValue(mockUser),
    destroy: jest.fn().mockReturnValue(mockUser),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(getModelToken(User))
      .useValue(mockUserRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect('Contetnt-Type', /json/)
      .expect(200)
      .expect(mockUser);
  });
});
