import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
