import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserSignUpController } from './controllers/signup.controller';
import { LoginService } from './services/login.service';
import { SignUpService } from './services/signup.service';
import { UserLoginController } from './controllers/login.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserSignUpController, UserLoginController],
  providers: [UserService, LoginService, SignUpService, AccessTokenStrategy],
})
export class UserModule {}
