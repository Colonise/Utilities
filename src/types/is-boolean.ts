import { is } from './is';

export function isBoolean(object: unknown): object is boolean {
    // TSLint seems to think `typeof object === 'boolean'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return typeof object === 'boolean' || is(object, Boolean);
}
