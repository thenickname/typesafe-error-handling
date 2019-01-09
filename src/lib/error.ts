
export enum Errors {
    OutOfBoundsError = 'OutOfBoundsError',
}

export abstract class OperationalError {

    public readonly message: string;
    public readonly stack?: string;

    protected abstract readonly type: Errors;

    public abstract get name(): Errors;

    constructor( message: string = '', stack: boolean | string = false ) {
        this.message = message;
        this.stack = this.getStack( stack );
    }

    public toString() {
        return `${this.type}: ${this.message}`;
    }

    private getStack( stack: boolean | string ): string | undefined {
        if ( typeof stack === 'string' ) {
            return stack;
        }
        if ( stack ) {
            return ( new Error() ).stack;
        }
    }

}

export type Result<Ok, Err extends OperationalError> = Ok | Err;

export function match<Ok = never, Err extends OperationalError = never, OkRet = void, ErrRet = void>(
    result: Result<Ok, Err>,
    okCallback: ( ok: Ok ) => OkRet,
    errorCallback: ( error: Err ) => ErrRet,
): OkRet | ErrRet {
    if ( result instanceof OperationalError ) {
        return errorCallback( result );
    }
    return okCallback( result );
}