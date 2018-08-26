import { is } from './is';

// tslint:disable-next-line:no-any
export function isArray(object: any): object is any[] {
    return is(object, Array);
}
