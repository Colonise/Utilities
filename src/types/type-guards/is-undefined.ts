import { isObjectTag } from './is-object-tag';

export function isUndefined(object: unknown): object is undefined {
    // TSLint seems to think `typeof object === 'undefined'` is always false
    // tslint:disable-next-line:strict-type-predicates
    return typeof object === 'undefined' || isObjectTag(object, 'Undefined');
}
