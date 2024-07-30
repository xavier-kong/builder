import { randomUUID } from "crypto";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const store = new Map<string, string>();

export const webTel = createTRPCRouter({
    generateQrCodeUrl: publicProcedure
    .query(() => {
        const uuid = randomUUID();

        const passcode = Math.floor(100000 + Math.random() * 900000).toString();

        store.set(uuid, passcode);

        return {
            uuid
        };
    }),
});

