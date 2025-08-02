import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { RoleModule } from './role/role.module';


@Module({
  imports: [AuthModule, UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
