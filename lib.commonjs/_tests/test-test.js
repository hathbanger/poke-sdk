"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
describe('does test testing', function () {
    // const tests = loadTests<TestCaseAccount>("accounts");
    const tests = ['test'];
    for (const test of tests) {
        it(`runs test testing: ${test}`, function () {
            assert_1.default.equal('test', 'test');
        });
    }
});
//# sourceMappingURL=test-test.js.map