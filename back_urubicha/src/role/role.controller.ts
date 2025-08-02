import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.roleService.createRole(name);
  }

  /*@Post('assign')
  assign(
    @Body('userId') userId: number,
    @Body('roleId') roleId: number,
  ) {
    return this.roleService.assignRoleToUser(userId, roleId);
  }

  @Get('user/:id')
  getUserRoles(@Param('id') id: number) {
    return this.roleService.getUserRoles(id);
  }*/
}
