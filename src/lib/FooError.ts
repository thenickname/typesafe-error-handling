import { BaseError, Errors } from "./UserLandErrors";

export class FooError extends BaseError {

    protected type: Errors.FooError = Errors.FooError;

    get name() {
        return this.type;
    }

}