export type EitherStatus = "not-set" | "first" | "second";

export interface EitherFoldLike<F = unknown, S = unknown> {
  first?: F;
  second?: S;
  status: EitherStatus;
}

export interface EitherLike<F = unknown, S = unknown> {
  /**
   * Returns status
   */
  get status(): EitherStatus;

  /**
   * Checks if is first.
   *
   * @return true, if is first
   */
  get isFirst(): boolean;

  /**
   * Returns the first choice.
   *
   * @return the first
   */
  get first(): F;

  /**
   * Checks if is second.
   *
   * @return true, if is second
   */
  get isSecond(): boolean;

  /**
   * Returns the second choice.
   *
   * @return the second
   */
  get second(): S;

  /**
   * Returns first and second values with status
   *
   * @return the new {@linkcode EitherLike}
   */
  fold<F2 = F, S2 = S>(): EitherFoldLike<F2, S2>;
}
