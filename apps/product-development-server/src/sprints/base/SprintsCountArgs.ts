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
import { SprintsWhereInput } from "./SprintsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SprintsCountArgs {
  @ApiProperty({
    required: false,
    type: () => SprintsWhereInput,
  })
  @Field(() => SprintsWhereInput, { nullable: true })
  @Type(() => SprintsWhereInput)
  where?: SprintsWhereInput;
}

export { SprintsCountArgs as SprintsCountArgs };