import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Roles, type Role } from '../auth/roles';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  // TEMP endpoint: /auth/dev-token?role=ADMIN
  // @Get('dev-token')
  // devToken(@Query('role') role?: Role) {
  //   const safeRole = role === Roles.ADMIN ? Roles.ADMIN : Roles.SHOPPER;
  //   return this.auth.devLogin(safeRole);
  // }
}
