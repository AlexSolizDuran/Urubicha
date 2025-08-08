import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// este modulo es para que podamos usar prisma en todo el proyecto 
@Global() // para poder usarlo sin importarlo manualmente en cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}