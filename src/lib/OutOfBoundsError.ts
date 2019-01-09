import { OperationalError, Errors } from "./error";

export class OutOfBoundsError extends OperationalError {

    protected type: Errors.OutOfBoundsError = Errors.OutOfBoundsError;

    get name() {
        return this.type
    }

}