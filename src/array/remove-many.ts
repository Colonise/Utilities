import { remove } from './remove';

export function removeMany<T>(array: T[], items: T[]): T[] {
    items.forEach(item => remove(array, item));

    return array;
}
