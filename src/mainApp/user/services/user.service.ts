import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserLoginDTO } from '../dtos/user.login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async saveNewUserInfoInDB(userObj: any) {
    console.log('Inside saveNewUserInfoInDB: ', userObj);
    const resp = this.userRepo.create(userObj);
    const saveResp = await this.userRepo.save(resp);
    return saveResp;
  }
  async getUserInfo(userObj: UserLoginDTO) {
    console.log('Inside getUserInfo: ', userObj);
    const resp = await this.userRepo.findOne({
      where: { userName: userObj.userName, password: userObj.password },
    });
    return resp;
  }
}
