import { EntityD } from 'src/entity-d/entities/entity-d.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(() => EntityD, { cascade: true })
  entityD: EntityD;
}
