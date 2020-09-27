import { is } from './is';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(object: unknown): object is Function {
    return typeof object === 'function' || is(object, Function);
}
