import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityDDto } from './create-entity-d.dto';

export class UpdateEntityDDto extends PartialType(CreateEntityDDto) {}
