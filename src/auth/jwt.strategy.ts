import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { type Role } from '../auth/roles';

export type JwtPayload = {
  sub: string; // userId
  role: Role;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET!,
    });
  }

  validate(payload: JwtPayload) {
    // TODO: implement in the future an extra check:
    // const user = await this.usersService.findById(payload.sub);
    // if (!user || user.disabled) throw new UnauthorizedException();
    return { userId: payload.sub, role: payload.role };
  }
}
