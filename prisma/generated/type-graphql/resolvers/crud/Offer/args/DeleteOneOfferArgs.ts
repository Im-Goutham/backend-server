import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferWhereUniqueInput } from "../../../inputs/OfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;
}
