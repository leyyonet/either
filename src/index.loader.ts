import {FQN} from "./internal.js";
import {defineLoader} from "@leyyo/common";


// noinspection JSUnusedGlobalSymbols
export const loader_leyyoEither = defineLoader(FQN,
    // classes
    () => import('./either.js').then(m => m.Either),
);
