import { removeAt } from './remove-at';

export function remove<T>(array: T[], item: T): T[] {
    let index = array.indexOf(item);

    while (index !== -1) {
        removeAt(array, index);

        index = array.indexOf(item);
    }

    return array;
}
