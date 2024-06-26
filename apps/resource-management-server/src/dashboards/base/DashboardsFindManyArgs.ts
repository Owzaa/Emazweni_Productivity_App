/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DashboardsWhereInput } from "./DashboardsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DashboardsOrderByInput } from "./DashboardsOrderByInput";

@ArgsType()
class DashboardsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DashboardsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DashboardsWhereInput, { nullable: true })
  @Type(() => DashboardsWhereInput)
  where?: DashboardsWhereInput;

  @ApiProperty({
    required: false,
    type: [DashboardsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DashboardsOrderByInput], { nullable: true })
  @Type(() => DashboardsOrderByInput)
  orderBy?: Array<DashboardsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DashboardsFindManyArgs as DashboardsFindManyArgs };
