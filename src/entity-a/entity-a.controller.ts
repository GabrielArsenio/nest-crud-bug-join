import { Controller } from '@nestjs/common';
import { EntityAService } from './entity-a.service';
import { Crud, CrudController } from '@dataui/crud';
import { EntityA } from './entities/entity-a.entity';

@Crud({
  model: { type: EntityA },
  query: {
    join: {
      entityB: {},
      'entityB.entityC': {},
      'entityB.entityC.entityD': {},
    },
  },
})
@Controller('entity-a')
export class EntityAController implements CrudController<EntityA> {
  constructor(public service: EntityAService) {}
}
