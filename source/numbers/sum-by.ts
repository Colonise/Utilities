import { forIn } from '../objects';
import { ArrayIterator, ObjectIterator } from '../types';

export function sumBy<T>(array: T[], iterator: ArrayIterator<T, number>): number;
export function sumBy<T>(object: T, iterator: ObjectIterator<T, number>): number;
export function sumBy(
    object: object,
    iterator: ObjectIterator<object, number> | ArrayIterator<object, number>
): number {
    let result = 0;

    forIn(object, (value, key) => {
        result += (<ObjectIterator<object, number>>iterator)(value, key, object);
    });

    return result;
}
