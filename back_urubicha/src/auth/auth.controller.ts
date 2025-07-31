import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { JwtAuthGuard } from './guards/jwt-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,private userService:UserService) {}

  @Post('/register')
  async register(@Body() algo : CreateUserDto){
    return this.userService.createUser(algo);

  }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get("/profile")
  async getProfile(@Request() request){
    return await this.userService.getUseryId(request.user.userId)
  }
  
}
