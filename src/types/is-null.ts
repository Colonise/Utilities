import { isObjectTag } from './is-object-tag';

// tslint:disable-next-line:no-any
export function isNull(object: any): object is null {
    return object === null || isObjectTag(object, 'Null');
}
