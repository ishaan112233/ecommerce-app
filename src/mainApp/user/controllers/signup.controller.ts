import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserSignUpDto } from '../dtos/user.signup.dto';
import { SignUpService } from '../services/signup.service';
import { Roles } from 'src/constants/decorators/roles.decorator';
import { RolesGuardGuard } from 'src/constants/guards/roles.guard';
import { AuthenticationGuard } from 'src/auth/auth.guard';

@Controller('/user/signup')
export class UserSignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  async saveNewUserInfo(@Body() body: UserSignUpDto) {
    console.log('In saveNewUserInfo: ', body);
    const resp = await this.signUpService.saveNewUserInfo(body);
    return resp;
  }

  @Roles('ADMIN')
  @UseGuards(AuthenticationGuard, RolesGuardGuard)
  @Post('/test')
  async test() {
    return 'HELLO WORLD';
  }
}
