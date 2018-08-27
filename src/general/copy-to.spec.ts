import { IgnoreTest, Test, TestCase, TestFixture } from 'alsatian';

@TestFixture('copyTo() Tests')
export class CopyToTests {
    @IgnoreTest('TODO')
    @Test('copyTo()')
    public copyTo1<T>(array: T[], expected: T, item: T) {
        //
    }
}
