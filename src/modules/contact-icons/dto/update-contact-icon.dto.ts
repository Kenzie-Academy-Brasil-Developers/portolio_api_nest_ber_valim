import { PartialType } from '@nestjs/swagger';
import { CreateContactIconDto } from './create-contact-icon.dto';

export class UpdateContactIconDto extends PartialType(CreateContactIconDto) {}
