import { is } from './is';

// tslint:disable-next-line:no-any
export function isError(object: any): object is Error {
    return is(object, Error);
}
