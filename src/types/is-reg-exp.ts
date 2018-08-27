import { is } from './is';

// tslint:disable-next-line:no-any
export function isRegExp(object: any): object is RegExp {
    return is(object, RegExp);
}
