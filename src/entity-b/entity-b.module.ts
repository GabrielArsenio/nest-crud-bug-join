import { Module } from '@nestjs/common';
import { EntityBService } from './entity-b.service';
import { EntityBController } from './entity-b.controller';
import { EntityB } from './entities/entity-b.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntityB])],
  controllers: [EntityBController],
  providers: [EntityBService, TypeOrmModule],
})
export class EntityBModule {}
