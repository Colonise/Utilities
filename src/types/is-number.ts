import { is } from './is';

// tslint:disable-next-line:no-any
export function isNumber(object: any): object is number {
    return typeof object === 'number' || is(object, Number);
}
