import { OutOfBoundsError } from "./lib/OutOfBoundsError";
import { match, Result } from "./lib/result-error-match";
import { Errors } from "./lib/UserLandErrors";
import { FooError } from "./lib/FooError";

function boundRandom( upperBound: number ): Result<number, OutOfBoundsError | FooError> {
    const result = Math.random();
    if( result > upperBound ) {
        return new OutOfBoundsError();
    }
    if ( result === 0.7 ) {
        return new FooError();
    }
    return result;
}

match( boundRandom( 0.4 ),
    ( result ) => {
        console.log( 'Success:', result );
        return "45";
    },
    ( err ) => ( {
        [Errors.OutOfBoundsError] : 'out of bounds',
        [Errors.FooError] : 'foo',
    }[err.name] ),
)

function bleeeh( b: number ): Result<number, FooError> {
    return match( boundRandom( b ),
        ( result ) => result * 100,
        ( error ) => new FooError( error.message ),
    )
}
