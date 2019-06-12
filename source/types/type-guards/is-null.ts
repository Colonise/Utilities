import { isObjectTag } from './is-object-tag';

export function isNull(object: unknown): object is null {
    // TSLint seems to think `object === null` is always false
    // tslint:disable-next-line:strict-type-predicates
    return object === null || isObjectTag(object, 'Null');
}
