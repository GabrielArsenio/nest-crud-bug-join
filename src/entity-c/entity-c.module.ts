import { Module } from '@nestjs/common';
import { EntityCService } from './entity-c.service';
import { EntityCController } from './entity-c.controller';
import { EntityC } from './entities/entity-c.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntityC])],
  controllers: [EntityCController],
  providers: [EntityCService, TypeOrmModule],
})
export class EntityCModule {}
