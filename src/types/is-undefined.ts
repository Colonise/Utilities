import { isObjectTag } from './is-object-tag';

// tslint:disable-next-line:no-any
export function isUndefined(object: any): object is undefined {
    return typeof object === 'undefined' || isObjectTag(object, 'Undefined');
}
