import { is } from './is';

// tslint:disable-next-line:no-any
export function isString(object: any): object is string {
    return typeof object === 'string' || is(object, String);
}
