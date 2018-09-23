import { Unknown } from './unknown';

// tslint:disable-next-line:no-any
export type Indexed<T = { [key: string]: Unknown }> = { [K in keyof T]: T[K] };
