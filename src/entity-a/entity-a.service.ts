import { Injectable } from '@nestjs/common';
import { EntityA } from './entities/entity-a.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntityAService extends TypeOrmCrudService<EntityA> {
  constructor(@InjectRepository(EntityA) repo: Repository<EntityA>) {
    super(repo);
  }
}
