import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

export function isVoid(object: unknown): object is void {
    return isNull(object) || isUndefined(object);
}
