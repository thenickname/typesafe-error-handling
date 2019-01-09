import { OperationalError, Errors } from "./result-error-match";

export class OutOfBoundsError extends OperationalError {

    protected type: Errors.OutOfBoundsError = Errors.OutOfBoundsError;

    get name() {
        return this.type
    }

}