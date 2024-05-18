import { Exclude } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { UserRoleEnum } from 'src/constants/enum/role.enum';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  incId: number;

  @Index()
  @IsUUID()
  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @Index({ unique: true })
  @Column({ name: 'username', nullable: false })
  userName: string;

  @Column({ name: 'password', nullable: false })
  @Exclude()
  password: string;

  @Column({ name: 'role', type: 'enum', enum: UserRoleEnum, nullable: false })
  userRole: UserRoleEnum;
}
