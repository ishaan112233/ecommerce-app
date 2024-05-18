import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
export class UserLoginDTO {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
