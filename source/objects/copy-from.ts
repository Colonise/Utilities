import { isObject } from '../types';

export function copyFrom<T>(to: T, from: T): T;
export function copyFrom<T>(to: T, ...from: T[]): T;
export function copyFrom<T>(to: T, ...froms: T[]): T {
    if (!isObject(to)) {
        return to;
    }

    if (froms.length === 0) {
        return to;
    }

    for (const from of froms) {
        if (isObject(from)) {
            for (const key in from) {
                if (from.hasOwnProperty(key)) {
                    to[key] = from[key];
                }
            }
        }
    }

    return to;
}
