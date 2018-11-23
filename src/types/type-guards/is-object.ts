import { is } from './is';

export function isObject(object: unknown): object is object {
    // TSLint seems to think `typeof object === 'object'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return (typeof object === 'object' && object !== null) || is(object, Object);
}
