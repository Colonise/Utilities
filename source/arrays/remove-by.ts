import type { ArrayEnumerator } from '../types/array-enumerator';
import { removeMany } from './remove-many';

export function removeBy<T>(array: T[], enumerator: ArrayEnumerator<T>): T[] {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return removeMany(array, array.filter(enumerator));
}
