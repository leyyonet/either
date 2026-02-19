import { FQN } from "./internal.js";
import { defineLoader, loader_leyyoCommon } from "@leyyo/common";

// noinspection JSUnusedGlobalSymbols
export const loader_leyyoEither = defineLoader(
  FQN,
  ...loader_leyyoCommon,
  // classes
  () => import("./either.js").then((m) => m.Either),
);
