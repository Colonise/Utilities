import { enumerate } from '../objects';
import type {
    ArrayEnumerator, ObjectEnumerator
} from '../types';

export function maxBy<T>(array: T[], enumerator: ArrayEnumerator<T, number>): T;
export function maxBy<T>(object: T, enumerator: ObjectEnumerator<T, number>): T[keyof T];
// eslint-disable-next-line @typescript-eslint/ban-types
export function maxBy<T extends object>(
    object: T,
    enumerator: ObjectEnumerator<T, number> | ArrayEnumerator<T, number>
): T[keyof T] | undefined {
    let result: T[keyof T] | undefined = undefined;
    let currentMaxNumber = -Infinity;

    enumerate(object, (value, key) => {
        const currentValue = (<ObjectEnumerator<T, number>>enumerator)(value, key, object);

        if (currentValue > currentMaxNumber) {
            result = value;
            currentMaxNumber = currentValue;
        }
    });

    return result;
}
