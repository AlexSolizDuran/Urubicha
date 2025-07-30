import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(private prisma : PrismaService){}

    async createUser(algo:CreateUserDto){
        try {
            const salts = await bcrypt.genSalt()
            const hash = await bcrypt.hash(algo.password,salts);
            const newUser = await this.prisma.user.create({data:{username:algo.username,password:hash}})
            const {password,...result} = newUser;
            return result
        } catch (error) {
            if (error instanceof Error)
                throw new InternalServerErrorException(error.message);
        }
    }
    async findOneUser(username : string){
        try {
            const user = await this.prisma.user.findFirst({where:{username}}) 
            if (user) return user
            return null
        } catch (error) {
            if (error instanceof Error) 
                throw new InternalServerErrorException(error.message);
        }
    }
}
