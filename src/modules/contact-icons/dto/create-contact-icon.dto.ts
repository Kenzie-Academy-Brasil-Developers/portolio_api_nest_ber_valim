import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateContactIconDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contactIcon: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  contactName: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty()
  @IsString()
  contactLink: string;
}
