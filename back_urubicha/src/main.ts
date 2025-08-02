import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activa la validación global
  app.useGlobalPipes(new ValidationPipe());

  // Configura CORS para permitir peticiones desde tu frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Cambia esto si tu frontend corre en otra URL o puerto
    credentials: true, // Por si usas cookies luego, es buena práctica
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
