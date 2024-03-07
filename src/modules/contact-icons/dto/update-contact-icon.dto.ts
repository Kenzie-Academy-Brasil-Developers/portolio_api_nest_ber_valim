import { PartialType } from '@nestjs/mapped-types';
import { CreateContactIconDto } from './create-contact-icon.dto';

export class UpdateContactIconDto extends PartialType(CreateContactIconDto) {}
