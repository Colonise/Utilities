import { findIndexBy } from './find-index-by';

export function findIndex<T>(array: T[], item: T): number;
export function findIndex<T>(array: T[], itemToFind: T): number {
    return findIndexBy(array, item => item === itemToFind);
}
