import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // para poder usarlo sin importarlo manualmente en cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
