import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityAModule } from './entity-a/entity-a.module';
import { EntityBModule } from './entity-b/entity-b.module';
import { EntityCModule } from './entity-c/entity-c.module';
import { EntityDModule } from './entity-d/entity-d.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    EntityAModule,
    EntityBModule,
    EntityCModule,
    EntityDModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
