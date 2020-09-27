import { is } from './is';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isObject(object: unknown): object is object {
    return (typeof object === 'object' && object !== null) || is(object, Object);
}
