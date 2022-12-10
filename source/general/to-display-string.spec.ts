import { expect } from 'chai';
import { toDisplayString } from './to-display-string';

describe('toDisplayString', () => {
    it('should not throw on a plain object', () => {
        expect(() => toDisplayString({ 1: 1 })).not.to.throw();
    })
})
