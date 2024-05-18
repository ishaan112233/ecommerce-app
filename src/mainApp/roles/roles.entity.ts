import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class UserRolesEntity {
  @PrimaryGeneratedColumn()
  incId: number;

  @Column({ name: 'role' })
  role: string;

  @Column({ name: 'can_fetch', default: false })
  canFetch: boolean;

  @Column({ name: 'can_insert', default: false })
  canInsert: boolean;

  @Column({ name: 'can_update', default: false })
  canUpdate: boolean;

  @Column({ name: 'can_delete', default: false })
  canDelete: boolean;
}
