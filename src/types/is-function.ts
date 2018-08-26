import { is } from './is';

// tslint:disable-next-line:no-any
export function isFunction(object: any): object is Function {
    return typeof object === 'function' || is(object, Function);
}
