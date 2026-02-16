import {EitherFoldLike, EitherLike, EitherStatus} from "./index.types.js";
import {setFqn} from "@leyyo/common";
import {FQN} from "./internal.js";

/**
 * {@code Either} is an object that represents a choice between two possible objects of potentially two different types. One common use for something
 * like this is to wrap the execution of a function that can throw an exception such that the exception is bound into an
 * <code>Either&lt;Result,Exception&gt;</code> and thereby remove the need to a try...catch block.
 *
 * @param <F> The type of the first choice
 * @param <S> The type of the second choice
 */
export class Either<F = unknown, S = unknown> implements EitherLike<F, S> {

    /** The {@code first} member variable. */
    private readonly _status: EitherStatus;

    /** The {@code first} member variable. */
    private readonly _first: F;

    /** The {@code second} member variable. */
    private readonly _second: S;

    /**
     * Constructor
     *
     * @param first the first
     * @param second the second
     * @param status the status as {@code first} or {@code second}
     */
    private constructor(first: F, second: S, status: EitherStatus) {
        this._first = first;
        this._second = second;
        this._status = status;
    }

    /** {@inheritDoc} */
    get status(): EitherStatus {
        return this._status;
    }

    /** {@inheritDoc} */
    get isFirst(): boolean {
        return this._status === 'first';
    }

    /** {@inheritDoc} */
    get isSecond(): boolean {
        return this._status === 'second';
    }

    /** {@inheritDoc} */
    get first(): F {
        return this._first;
    }

    /** {@inheritDoc} */
    get second(): S {
        return this._second;
    }

    /** {@inheritDoc} */
    fold<F2 = F, S2 = S>(): EitherFoldLike<F2, S2> {
        const like: EitherFoldLike<F2, S2> = {status: this._status};
        if (this._status === 'first') {
            like.first = this._first as unknown as F2;
        } else if (this._status === 'second') {
            like.second = this._second as unknown as S2;
        }
        return like;
    }

    /**
     * Create a new <code>Either</code> where the first choice is available.
     *
     * @param first the first value
     * @return the new <code>Either</code>
     */
    static first<F>(first: F) {
        return new Either<F>(first, undefined, 'first');
    }

    /**
     * Create a new <code>Either</code> where the second choice is available.
     *
     * @param second the second value
     * @return the new <code>Either</code>
     */
    static second<F>(second: F) {
        return new Either<F>(undefined, second, 'second');
    }
}
setFqn(Either, FQN);
