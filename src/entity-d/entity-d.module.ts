import { Module } from '@nestjs/common';
import { EntityDService } from './entity-d.service';
import { EntityDController } from './entity-d.controller';
import { EntityD } from './entities/entity-d.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntityD])],
  controllers: [EntityDController],
  providers: [EntityDService, TypeOrmModule],
})
export class EntityDModule {}
