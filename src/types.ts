export type EitherStatus = 'not-set' | 'first' | 'second';

export interface EitherLike<F = unknown, S = unknown> {
    first?: F;
    second?: S;
    status: EitherStatus;
}