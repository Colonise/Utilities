import { findBy } from './find-by';

export function find<T>(array: T[], item: T): T | undefined;
export function find<T>(array: T[], itemToFind: T): T | undefined {
    return findBy(array, item => item === itemToFind);
}
