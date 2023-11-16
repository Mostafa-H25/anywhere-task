import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'announcements' })
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  announcement: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
