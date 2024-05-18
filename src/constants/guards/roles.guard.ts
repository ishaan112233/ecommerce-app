import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuardGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    console.log('USER: ', req.user);
    const userRole = req.user.role;
    const data = this.reflector.get<string[]>('Roles', context.getHandler());
    console.log('data: ', data);
    const isUserAllowed = data.includes(userRole);
    if (isUserAllowed) return true;
    return false;
  }
}
