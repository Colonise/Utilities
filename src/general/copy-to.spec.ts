import { IgnoreTest, Test, TestFixture } from 'alsatian';

@TestFixture('copyTo() Tests')
export class CopyToTests {
    @IgnoreTest('TODO')
    @Test('copyTo()')
    // @ts-ignore: Allow unused parameter for ignored test
    public copyTo1<T>(array: T[], expected: T, item: T) {
        //
    }
}
