import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[PassportModule, JwtModule.register({
      secret: "secreto", // esta es una variable importante
      signOptions: { expiresIn: '8hrs' },
    }),],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,UserService]
})
export class AuthModule {}
