import { ArrayEnumerator } from '../types/array-enumerator';
import { removeMany } from './remove-many';

export function removeBy<T>(array: T[], enumerator: ArrayEnumerator<T>): T[] {
    return removeMany(array, array.filter(enumerator));
}
