export type Indexed<T> = { [K in keyof T]: T[K] };
