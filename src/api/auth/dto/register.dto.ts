
import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional
} from 'class-validator';
import { ParentRegisterDTO } from './parent.dto';

export class RegisterDTO extends ParentRegisterDTO {
 
  @ApiProperty()
  @IsOptional()
  expertise?: string;

  @ApiProperty()
  @IsOptional()
  certificate_no?: string;
}
