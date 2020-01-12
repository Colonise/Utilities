import { ArrayEnumerator } from '../types/array-enumerator';

export function findBy<T>(array: T[], enumerator: ArrayEnumerator<T>): T | undefined {
    for (let i = 0; i < array.length; i++) {
        if (enumerator(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}
