import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoleService } from './role.service';

@Module({
  imports: [PrismaModule],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
