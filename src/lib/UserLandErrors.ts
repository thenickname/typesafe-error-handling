import { OperationalError } from "./result-error-match";

export enum Errors {
    OutOfBoundsError = 'OutOfBoundsError',
    FooError = 'FooError',
    AnotherError = 'AnotherError'
}

export abstract class BaseError extends OperationalError {

    protected abstract readonly type: Errors;

    public abstract get name(): Errors;

}