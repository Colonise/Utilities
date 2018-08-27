import { IgnoreTest, Test, TestFixture } from 'alsatian';

@TestFixture('copy() Tests')
export class CopyTests {
    @IgnoreTest('TODO')
    @Test('copy()')
    public copy1<T>(array: T[], expected: T, item: T) {
        //
    }
}
