import { ArrayIterator } from '../types';
import { removeMany } from './remove-many';

export function removeBy<T>(array: T[], iterator: ArrayIterator<T>): T[] {
    return removeMany(array, array.filter(iterator));
}
