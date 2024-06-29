import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityBDto } from './create-entity-b.dto';

export class UpdateEntityBDto extends PartialType(CreateEntityBDto) {}
