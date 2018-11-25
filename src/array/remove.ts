import { removeAt } from './remove-at';

export function remove<T>(array: T[], item: T): T[] {
    return removeAt(array, array.indexOf(item));
}
