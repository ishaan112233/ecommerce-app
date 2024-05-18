import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRolesEntity } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRolesEntity])],
})
export class UserRoleModule {}
