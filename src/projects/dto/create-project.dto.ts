import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsUUID } from "class-validator";

export class CreateProjectDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    status: string;

    @ApiProperty()
    @IsDate()
    startDate: Date;

    @ApiProperty()
    @IsDate()
    endDate: Date;

    @ApiProperty()
    @IsUUID()
    careerId: string;

    @ApiProperty()
    @IsUUID()
    skillsId: string;
}
