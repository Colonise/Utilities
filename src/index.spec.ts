import { Expect, Test, TestFixture } from 'alsatian';
import * as utilities from './';

@TestFixture('Utilities Tests')
export class UtilitiesTests {
    @Test('utilities')
    public utilities1() {
        Expect(utilities).toBeDefined();
    }
}
