export type ObjectEnumerator<T, R = unknown> = (item: T[keyof T], key: keyof T, object: T) => R;
