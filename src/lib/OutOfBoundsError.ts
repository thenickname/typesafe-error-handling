import { Errors, BaseError } from "./UserLandErrors";

export class OutOfBoundsError extends BaseError {

    protected type: Errors.OutOfBoundsError = Errors.OutOfBoundsError;

    get name() {
        return this.type
    }

}