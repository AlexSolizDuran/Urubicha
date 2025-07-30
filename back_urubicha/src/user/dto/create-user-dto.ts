import { isNotEmpty, isString } from "class-validator"

export class CreateUserDto{

    @isString()
    @isNotEmpty()
    username:string

    @isString()
    @isNotEmpty()
    password:string
}