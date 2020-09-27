import { isObjectTag } from './is-object-tag';

export function isUndefined(object: unknown): object is undefined {
    return typeof object === 'undefined' || isObjectTag(object, 'Undefined');
}
