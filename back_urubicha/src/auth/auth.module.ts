import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports:[PassportModule, JwtModule.register({
      secret: "secreto", // esta es una variable importante
      signOptions: { expiresIn: '8hrs' },
    }),],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,UserService,JwtStrategy,PrismaService]
})
export class AuthModule {}
