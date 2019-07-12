import { Constructor } from './constructor';

export type InstanceOf<TConstructor extends Constructor> = TConstructor['prototype'] & { constructor: TConstructor };
