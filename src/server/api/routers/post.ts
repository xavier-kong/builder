import { randomUUID } from "crypto";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const store: Record<string, string> = {};

export const postRouter = createTRPCRouter({
  generateQrCodeUrl: publicProcedure
  .query(() => {
    const uuid = randomUUID();

    const passcode = Math.floor(100000 + Math.random() * 900000).toString();

    store[uuid] = passcode;

    return {
      uuid
    };
  }),
  hello: publicProcedure
  .input(z.object({ text: z.string() }))
  .query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
});
