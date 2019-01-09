import { OutOfBoundsError } from "./lib/OutOfBoundsError";
import { match, Result } from "./lib/result-error-match";

function boundRandom( upperBound: number ): Result<number, OutOfBoundsError> {
    const result = Math.random();
    if( result > upperBound ) {
        return new OutOfBoundsError();
    }
    return result;
}

match( boundRandom( 0.4 ),
    ( result ) => console.log( 'Success:', result ),
    ( err ) => console.error( 'Error:', err ),
)
