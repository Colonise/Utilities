import { isArray, isObject } from '../types';
import { getOwnPropertyDescriptors } from './get-own-property-descriptors';

export function clone<T>(object: T): T;
export function clone<T>(array: T[]): T[];
export function clone<T>(objectOrArray: T): T | T[] {
    if (!isObject(objectOrArray)) {
        return objectOrArray;
    }

    if (isArray<T>(objectOrArray)) {
        return objectOrArray.slice();
    }

    return Object.create(Object.getPrototypeOf(objectOrArray), getOwnPropertyDescriptors(objectOrArray));
}
