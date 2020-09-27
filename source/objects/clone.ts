import { getOwnPropertyDescriptors } from './get-own-property-descriptors';
import { isArray } from '../types';
import { isObject } from '../types/type-guards/is-object';

export function clone<T>(object: T): T;
export function clone<T>(array: T[]): T[];
export function clone<T>(objectOrArray: T): T | T[] {
    if (!isObject(objectOrArray)) {
        return objectOrArray;
    }

    if (isArray<T>(objectOrArray)) {
        return objectOrArray.slice();
    }

    const result = <T | T[]>Object.create(Object.getPrototypeOf(objectOrArray), getOwnPropertyDescriptors(objectOrArray));

    return result;
}
