import { is } from './is';

export function isDate(object: unknown): object is Date {
    return is(object, Date);
}
