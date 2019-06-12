import { is } from './is';

export function isError(object: unknown): object is Error {
    return is(object, Error);
}
