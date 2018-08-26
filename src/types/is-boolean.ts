import { is } from './is';

// tslint:disable-next-line:no-any
export function isBoolean(object: any): object is boolean {
    return typeof object === 'boolean' || is(object, Boolean);
}
