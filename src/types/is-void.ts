import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

// tslint:disable-next-line:no-any
export function isVoid(object: any): object is void {
    return isNull(object) || isUndefined(object);
}
