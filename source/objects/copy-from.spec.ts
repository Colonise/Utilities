import { IgnoreTest, Test, TestFixture } from 'alsatian';

@TestFixture('copyFrom() Tests')
export class CopyFromTests {
    @IgnoreTest('TODO')
    @Test('copyFrom()')
    // @ts-ignore: Allow unused parameter for ignored test
    public copyFrom1<T>(array: T[], expected: T, item: T) {
        //
    }
}
