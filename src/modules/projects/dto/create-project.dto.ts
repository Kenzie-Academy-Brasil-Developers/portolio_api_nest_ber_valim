import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  projectName: string;
  @IsString()
  @IsNotEmpty()
  projectImage: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsString()
  @IsNotEmpty()
  repositoryLink: string;
  @IsString()
  @IsNotEmpty()
  applicationLink: string;
}
