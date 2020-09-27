import { isObjectTag } from './is-object-tag';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isNull(object: unknown): object is null {
    return object === null || isObjectTag(object, 'Null');
}
