export interface Constructor<T = unknown> extends Function {
    prototype: T;

    // Allow any because we cannot know what a constructor's arguments are
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new(...args: any[]): T;
}
