import { ArrayIterator, ObjectIterator } from '../types';

export function sumBy<T>(object: T, iterator: ObjectIterator<T, number>): number;
export function sumBy<T>(array: T[], iterator: ArrayIterator<T, number>): number;
export function sumBy<T>(object: T, iterator: ObjectIterator<T, number> | ArrayIterator<T, number>): number {
    let result = 0;

    // tslint:disable-next-line: forin
    for (const key in object) {
        result += (<ObjectIterator<T, number>>iterator)(object[key], key, object);
    }

    return result;
}
