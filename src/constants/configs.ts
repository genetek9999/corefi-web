import { env } from "~/env.mjs";

export const configs = {
  ON_METAMASK: env.NEXT_PUBLIC_WALLET === "metamask",
};
