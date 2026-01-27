import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type Role } from '../auth/roles';

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  // TEMP: no DB, no password. Just for testing guards.
  // devLogin(role: Role) {
  //   const payload = { sub: 'dev-user-1', role };
  //   return {
  //     accessToken: this.jwt.sign(payload),
  //   };
  // }
}