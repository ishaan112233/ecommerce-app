import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './roles/roles.module';
import { AccessTokenStrategy } from 'src/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, UserRoleModule],
  providers: [],
  exports: [],
})
export class mainAppModule {}
