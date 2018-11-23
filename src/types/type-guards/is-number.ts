import { is } from './is';

export function isNumber(object: unknown): object is number {
    // TSLint seems to think `typeof object === 'number'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return typeof object === 'number' || is(object, Number);
}
