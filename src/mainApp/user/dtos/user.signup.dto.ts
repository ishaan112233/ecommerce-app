import { IsAlphanumeric, IsEnum, IsNotEmpty } from 'class-validator';
import { UserRoleEnum } from 'src/constants/enum/role.enum';
export class UserSignUpDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRoleEnum)
  role: UserRoleEnum;
}
