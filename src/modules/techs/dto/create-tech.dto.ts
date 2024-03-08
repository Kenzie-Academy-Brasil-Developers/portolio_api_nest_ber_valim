import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTechDto {
  @IsString()
  @IsNotEmpty()
  techIcon: string;
}
