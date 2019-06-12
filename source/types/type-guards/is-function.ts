import { is } from './is';

export function isFunction(object: unknown): object is Function {
    // TSLint seems to think `typeof object === 'function'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return typeof object === 'function' || is(object, Function);
}
