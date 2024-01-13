import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneBookArgs {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;
}
