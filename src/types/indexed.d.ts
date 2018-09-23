export type Indexed<T = { [key: string]: any }> = { [K in keyof T]: T[K] };
