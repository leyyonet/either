import { PCK } from "../internal.js";
import { defineLazy, leyyoCommonLazy } from "@leyyo/common";

// noinspection JSUnusedGlobalSymbols
export const leyyoEitherLazy = defineLazy(PCK)
  .dependency(() => import("@leyyo/common").then((m) => m.leyyoCommonLazy))
  .add(() => import("../items/either.js").then((m) => m.Either))
  .end();
