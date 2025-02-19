import {EitherLike, EitherStatus} from "./types";

/**
 * {@code Either} is an object that represents a choice between two possible objects of potentially two different types. One common use for something
 * like this is to wrap the execution of a function that can throw an exception such that the exception is bound into an
 * <code>Either&lt;Result,Exception&gt;</code> and thereby remove the need to a try...catch block.
 *
 * @param <F> The type of the first choice
 * @param <S> The type of the second choice
 */
export class Either<F = unknown, S = unknown> {

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

    /**
     * Checks if is first.
     *
     * @return true, if is first
     */
    get isFirst(): boolean {
        return this._status === 'first';
    }

    /**
     * Checks if is second.
     *
     * @return true, if is second
     */
    get isSecond(): boolean {
        return this._status === 'second';
    }

    /**
     * Gets the first choice.
     *
     * @return the first
     */
    get first(): F {
        return this._first;
    }

    /**
     * Gets the second choice.
     *
     * @return the second
     */
    get second(): S {
        return this._second;
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

    /**
     * Returns first and second values with status
     *
     * @return the new {@linkcode EitherLike}
     */
    get fold(): EitherLike {
        const like: EitherLike = {status: this._status};
        if (this._status === 'first') {
            like.first = this._first;
        } else if (this._status === 'second') {
            like.second = this._second;
        }
        return like;
    }
}