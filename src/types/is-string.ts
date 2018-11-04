import { is } from './is';

export function isString(object: unknown): object is string {
    // TSLint seems to think `typeof object === 'string'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return typeof object === 'string' || is(object, String);
}
