import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Category } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => Category)
export class AdminCategoryResolver {
  // Query to fetch all product categories
  @Query(returns => [Category])
    async getAllAdminCategories(@Ctx() { prisma }: PrismaContext): Promise<Category[]> {
        return await prisma.category.findMany();
    }

  // Query to fetch a product category by ID
  @Query(returns => Category, { nullable: true })
  async getAdminCategoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
      return await prisma.category.findFirst({ where: { id } });
  }
 
}
