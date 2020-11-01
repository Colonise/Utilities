import { copyFrom } from './copy-from';

export function copy<T>(object: T): T;
export function copy<T>(...objects: T[]): T;
export function copy<T>(...objects: T[]): T {
    return copyFrom(<T>{}, ...objects);
}
