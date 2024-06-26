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
import { GanttChartsWhereInput } from "./GanttChartsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GanttChartsOrderByInput } from "./GanttChartsOrderByInput";

@ArgsType()
class GanttChartsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GanttChartsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GanttChartsWhereInput, { nullable: true })
  @Type(() => GanttChartsWhereInput)
  where?: GanttChartsWhereInput;

  @ApiProperty({
    required: false,
    type: [GanttChartsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GanttChartsOrderByInput], { nullable: true })
  @Type(() => GanttChartsOrderByInput)
  orderBy?: Array<GanttChartsOrderByInput>;

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

export { GanttChartsFindManyArgs as GanttChartsFindManyArgs };
