import { NestFactory } from '@nestjs/core';
import { SeederModule } from './database/seeders/seeder.module';
import { Seeder } from './database/seeders/seeder';
import { Logger } from './common/utils/logger';

async function bootstrap() {
  console.log(process.env.POSTGRES_PASSWORD);
  NestFactory.createApplicationContext(SeederModule)
    .then((appContext) => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(Seeder);
      seeder
        .seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch((error) => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}
bootstrap();
