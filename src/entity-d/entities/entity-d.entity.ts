import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityD {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
