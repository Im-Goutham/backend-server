import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CategoryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CategoryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentId?: StringNullableWithAggregatesFilter | undefined;
}
