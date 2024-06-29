import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityCDto } from './create-entity-c.dto';

export class UpdateEntityCDto extends PartialType(CreateEntityCDto) {}
