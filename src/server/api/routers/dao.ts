import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const daoRouter = createTRPCRouter({
  getAll: publicProcedure.input(z.object({ text: z.string() })).query(({ input, ctx }) => {
    return ctx.prisma.proposal.findMany();
  }),
});
