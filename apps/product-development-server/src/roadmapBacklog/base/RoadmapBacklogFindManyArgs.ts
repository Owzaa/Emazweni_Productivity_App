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
import { RoadmapBacklogWhereInput } from "./RoadmapBacklogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RoadmapBacklogOrderByInput } from "./RoadmapBacklogOrderByInput";

@ArgsType()
class RoadmapBacklogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RoadmapBacklogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RoadmapBacklogWhereInput, { nullable: true })
  @Type(() => RoadmapBacklogWhereInput)
  where?: RoadmapBacklogWhereInput;

  @ApiProperty({
    required: false,
    type: [RoadmapBacklogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RoadmapBacklogOrderByInput], { nullable: true })
  @Type(() => RoadmapBacklogOrderByInput)
  orderBy?: Array<RoadmapBacklogOrderByInput>;

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

export { RoadmapBacklogFindManyArgs as RoadmapBacklogFindManyArgs };