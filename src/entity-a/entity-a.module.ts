import { Module } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { EntityAController } from './entity-a.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityA } from './entities/entity-a.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntityA])],
  controllers: [EntityAController],
  providers: [EntityAService, TypeOrmModule],
})
export class EntityAModule {}
