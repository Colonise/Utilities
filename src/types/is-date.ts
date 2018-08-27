import { is } from './is';

// tslint:disable-next-line:no-any
export function isDate(object: any): object is Date {
    return is(object, Date);
}
