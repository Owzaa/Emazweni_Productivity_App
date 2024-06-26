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
import { WorkloadViewsWhereInput } from "./WorkloadViewsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WorkloadViewsOrderByInput } from "./WorkloadViewsOrderByInput";

@ArgsType()
class WorkloadViewsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WorkloadViewsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WorkloadViewsWhereInput, { nullable: true })
  @Type(() => WorkloadViewsWhereInput)
  where?: WorkloadViewsWhereInput;

  @ApiProperty({
    required: false,
    type: [WorkloadViewsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WorkloadViewsOrderByInput], { nullable: true })
  @Type(() => WorkloadViewsOrderByInput)
  orderBy?: Array<WorkloadViewsOrderByInput>;

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

export { WorkloadViewsFindManyArgs as WorkloadViewsFindManyArgs };
