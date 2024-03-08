import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateContactIconDto {
  @IsString()
  @IsNotEmpty()
  contactIcon: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  contactName: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsString()
  contactLink: string;
}
