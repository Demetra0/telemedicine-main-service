import { Injectable } from '@nestjs/common';
import { Logger } from '../../common/utils/logger';
import { UserSeederService } from './user/users.services';
import { users } from './user/data';
import { User } from '../../modules/users/interfaces/user.interface';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly userSeederService: UserSeederService,
  ) {}
  async seed() {
    await this.users(users)
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async users(usersData: User[]) {
    return await Promise.all(await this.userSeederService.createUser(usersData))
      .then((createdLanguages) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of users created : ' +
            // Remove all null values and return only created languages.
            createdLanguages.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
