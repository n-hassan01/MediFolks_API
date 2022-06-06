
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MinLength,
} from 'class-validator';
import { Permission } from "../../role/enum/permissions.enum";
import { ParentRegisterDTO } from './parent.dto';

export class AdminDto extends ParentRegisterDTO{

    @ApiProperty({ enum: Permission, isArray: true })
    @IsOptional()
    @IsEnum(Permission, { each: true })
    permissions: Permission[];
}