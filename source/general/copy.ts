import { copyTo } from './copy-to';

export function copy<T>(object: T): T {
    return copyTo(object, <T>{});
}
