import { isVoid } from './is-void';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isDefined<T>(value: T): value is Exclude<T, null | undefined> {
    return !isVoid(value);
}
