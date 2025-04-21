import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONT_URL, 
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  const logger = new Logger('Bootstrap');
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true 
    })
  );

  const config = new DocumentBuilder()
  .setTitle('Grade Management RESTFul API')
  .setDescription('Grade Management endpoints')
  .setVersion('1.0')
  .addTag('Students')
  .addTag('Subjects')
  .addTag('Grades')
  .addTag('Reports')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
