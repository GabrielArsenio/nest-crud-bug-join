import { EntityC } from 'src/entity-c/entities/entity-c.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => EntityC, { cascade: true })
  entityC: EntityC;
}
