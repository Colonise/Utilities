import { enumerate } from './enumerate';
import { isObject } from '../types/type-guards/is-object';

export function copyFrom<T>(to: T, from: T): T;
export function copyFrom<T>(to: T, ...from: T[]): T;
// eslint-disable-next-line id-length
export function copyFrom<T>(to: T, ...froms: T[]): T {
    if (!isObject(to)) {
        return to;
    }

    if (froms.length === 0) {
        return to;
    }

    for (const from of froms) {
        if (isObject(from)) {
            enumerate(from, (value, key) => {
                to[key] = value;
            });
        }
    }

    return to;
}
