import { EntityB } from 'src/entity-b/entities/entity-b.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => EntityB, { cascade: true })
  entityB: EntityB;
}
