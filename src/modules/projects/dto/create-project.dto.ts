import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  projectName: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  projectImage: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  repositoryLink: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  applicationLink: string;
}
function readonly(): (target: CreateProjectDto, propertyKey: 'id') => void {
  throw new Error('Function not implemented.');
}
