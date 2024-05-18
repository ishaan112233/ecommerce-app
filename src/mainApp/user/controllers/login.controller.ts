import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserLoginDTO } from '../dtos/user.login.dto';
import { LoginService } from '../services/login.service';
import { AuthenticationGuard } from 'src/auth/auth.guard';

@UseGuards(AuthenticationGuard)
@Controller('/user/login')
export class UserLoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async loginByUser(@Body() body: UserLoginDTO) {
    console.log('In loginByUser: ', body);
    const resp = await this.loginService.validateUserInfo(body);
    return resp;
  }
}
