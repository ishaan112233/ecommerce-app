import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers?.authorization.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException();
    }
    console.log('token: ', token);
    try {
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      req['user'] = payload;
    } catch (err) {
      console.log('ERR: ', err);
      throw new UnauthorizedException();
    }
    return true;
  }
}
