// tslint:disable-next-line:no-any
export function isObject(object: any): object is object {
    return typeof object === 'object' && object !== null;
}
