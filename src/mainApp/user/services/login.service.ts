import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDTO } from '../dtos/user.login.dto';

@Injectable()
export class LoginService {
  constructor(private userService: UserService) {}
  async validateUserInfo(userPayload: UserLoginDTO) {
    const userInfoFromDb = await this.userService.getUserInfo(userPayload);
    if (!userInfoFromDb) {
      throw new BadRequestException('Invalid Credentials');
    }
    return { message: 'Logged In Successfully' };
  }
}
