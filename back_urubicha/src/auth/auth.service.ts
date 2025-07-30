import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userservice:UserService,private jwtService: JwtService){}
    async validateUser(algo: CreateUserDto){
        try {
            const user = await this.userservice.findOneUser(algo.username);
            const machtResult = await bcrypt.compare(algo.password,user?.password ?? "")
            if(user && machtResult){
                const {password, ...result} = user;
                return result
            }
            return null;
            
        } catch (error) {
            if(error instanceof Error)
                throw new InternalServerErrorException(error.message)
        }
    }

    async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
