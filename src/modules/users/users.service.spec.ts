import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { User as IUser } from './interfaces/user.interface';
import { users } from '../../database/seeders/user/data';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { HttpException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let model: typeof User;

  const mockUser: IUser = users[0];

  const mockUserRepository = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<typeof User>(getModelToken(User));
  });

  describe('when findOne a user by snils', () => {
    describe('and the user is matched', () => {
      beforeEach(async () => {
        mockUserRepository.findOne.mockReturnValue(mockUser);
      });

      it('should get one user', async () => {
        const snilsUser = mockUser.snils;

        expect(await service.findOne(snilsUser)).toEqual(mockUser);
      });
      it('should called with where snils', async () => {
        const findSpy = jest.spyOn(model, 'findOne');
        const snilsUser = mockUser.snils;

        expect(await service.findOne(snilsUser));
        expect(findSpy).toBeCalledWith({ where: { snils: snilsUser } });
      });
    });
    describe('and the user is not matched', () => {
      it('should throw an error', async () => {
        const snilsUser = randomStringGenerator();

        try {
          await service.findOne(snilsUser);
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error).toHaveProperty('message', 'Пользователь не найден');
        }
      });
    });
  });

  describe('when findAll a users', () => {
    describe('and the users is matched', () => {
      beforeEach(async () => {
        mockUserRepository.findAll.mockReturnValue([mockUser]);
      });

      it('should get the users', async () => {
        expect(await service.findAll()).toEqual([mockUser]);
      });

      it('should get non-empty users', async () => {
        expect(await service.findAll()).not.toEqual([]);
      });
    });

    describe('and the user is matched', () => {
      beforeEach(async () => {
        mockUserRepository.findAll.mockReturnValue([]);
      });

      it('should get empty', async () => {
        expect(await service.findAll()).toEqual([]);
      });

      it('should get non-empty users', async () => {
        expect(await service.findAll()).not.toEqual([mockUser]);
      });
    });
  });

  describe('when create a user', () => {
    beforeEach(async () => {
      mockUserRepository.create.mockReturnValue(mockUser);
    });

    it('should add a user', async () => {
      expect(await service.create(mockUser)).toEqual(mockUser);
    });
  });

  describe('when update a user', () => {
    const updateFieldUser: UpdateUserDto = {
      firstName: 'Sergey',
    };

    const getUpdatedUser = () => {
      const updatedUser = Object.assign({}, mockUser);
      updatedUser['firstName'] = updateFieldUser['firstName'];
      updatedUser['email'] = updateFieldUser['email'];

      return updatedUser;
    };

    describe('and the user is matched', () => {
      beforeEach(async () => {
        mockUserRepository.update.mockReturnValue([2, [getUpdatedUser()]]);
      });

      it('should update a user name and email fields', async () => {
        const snilsUser = mockUser.snils;

        expect(await service.update(snilsUser, updateFieldUser)).toEqual({
          numberOfAffectedRows: 2,
          updatedUser: getUpdatedUser(),
        });
      });
    });
  });

  describe('when remove a user by snils', () => {
    describe('and the user is matched', () => {
      beforeEach(async () => {
        mockUserRepository.destroy.mockReturnValue(mockUser);
      });

      it('should destroy a user', async () => {
        expect(await service.remove(mockUser.snils)).toEqual(mockUser);
      });
    });

    describe('and the user is not matched', () => {
      it('should delete a user', async () => {
        await expect(await service.remove(mockUser.snils)).toEqual(undefined);
      });
    });
  });
});
