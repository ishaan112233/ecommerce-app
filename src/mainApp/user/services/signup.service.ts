import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { v4 as uuidV4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SignUpService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async saveNewUserInfo(userObj: any) {
    console.log('Inside Service: ', userObj);
    try {
      userObj.userId = uuidV4();
      const userSaveResp = await this.userService.saveNewUserInfoInDB(userObj);
      const newUserObj = {};
      newUserObj['userId'] = userSaveResp['userId'];
      const accessToken = await this.jwtService.signAsync(userObj, {
        secret: process.env.JWT_SECRET,
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
      });
      newUserObj['accessToken'] = accessToken;
      return newUserObj;
    } catch (err) {
      throw new BadRequestException('UserName Already Exists, Please Login');
    }
  }
}
