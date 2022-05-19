import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken, SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../src/modules/users/users.module';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { User as IUser } from '../src/modules/users/interfaces/user.interface';
import { users } from '../src/database/seeders/user/data';
import { User } from '../src/modules/users/entities/users.entity';
import { ValidationPipe } from '../src/common/pipes/validation.pipe';

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
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('/users (GET)', () => {
    it('should get array users, status 200 and content-type json', () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect([mockUser]);
    });
  });

  describe('/users (POST)', () => {
    it('should create user', () => {
      return request(app.getHttpServer())
        .post('/users')
        .send(mockUser)
        .expect('Content-Type', /json/)
        .expect(201)
        .then((response) => {
          expect(response.body).toEqual(mockUser);
        });
    });

    it('should throw 400 on validation error', () => {
      const userExpectSnils = mockUser;
      delete userExpectSnils.firstName;

      return request(app.getHttpServer())
        .post('/users')
        .send(userExpectSnils)
        .expect('Content-Type', /json/)
        .expect(400)
        .expect({
          statusCode: 400,
          message: [
            {
              firstName:
                'firstName should not be empty, firstName must be a string',
            },
          ],
          error: 'Bad Request',
        });
    });
  });
});
