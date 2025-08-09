import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.use(cookieParser());

  // Opcional: configurar CORS si usas frontend separado
  app.enableCors({
    origin: 'http://localhost:3000', // Cambia al dominio de tu frontend
    credentials: true,               // Permite enviar cookies en CORS
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
