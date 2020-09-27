import { is } from './is';

export function isString(object: unknown): object is string {
    return typeof object === 'string' || is(object, String);
}
