import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityADto } from './create-entity-a.dto';

export class UpdateEntityADto extends PartialType(CreateEntityADto) {}
