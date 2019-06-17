import { copyFrom } from './copy-from';

export function copy<T>(object: T): T {
    return copyFrom(<T>{}, object);
}
