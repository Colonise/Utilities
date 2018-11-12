export interface Constructor<T = unknown> extends Function {
    prototype: T;
    // Allow any because we cannot know what a constructor's arguments are
    // tslint:disable-next-line:no-any
    new (...args: any[]): T;
}
