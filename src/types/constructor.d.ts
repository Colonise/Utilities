export interface Constructor<T> {
    prototype?: T;
    name?: string;
    // tslint:disable-next-line:no-any
    new (...args: any[]): T;
}
