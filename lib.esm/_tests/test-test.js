import assert from 'assert';
describe('does test testing', function () {
    // const tests = loadTests<TestCaseAccount>("accounts");
    const tests = ['test'];
    for (const test of tests) {
        it(`runs test testing: ${test}`, function () {
            assert.equal('test', 'test');
        });
    }
});
//# sourceMappingURL=test-test.js.map