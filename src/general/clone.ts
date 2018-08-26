import { Indexed } from '../types/indexed';
import { isArray } from '../types/is-array';
import { isObject } from '../types/is-object';
import { copy } from './copy';
import { getOwnPropertyDescriptors } from './get-own-property-descriptors';

export function clone<T>(object: T): T;
export function clone<T>(array: T[]): T[];
export function clone<T>(objectOrArray: T): T | T[] {
    if (!isObject(objectOrArray)) {
        return objectOrArray;
    }

    if (isArray(objectOrArray)) {
        return objectOrArray.slice();
    }

    return Object.create(Object.getPrototypeOf(objectOrArray), getOwnPropertyDescriptors(objectOrArray));
}
