import { add, multiply } from "./functions";

describe("add関数のテスト", () => {
	test("[3]を受け取った場合、 3 が返ること", () => {
		const testCase = [3];
		expect(add(testCase)).toBe(3);
	});

	test("[3, 10, 3]を受け取った場合、 16 が返ること", () => {
		const testCase = [3, 10, 3];
		expect(add(testCase)).toBe(16);
	});

	test("[]を受け取った場合、 0 が返ること", () => {
		const testCase = [];
		expect(add(testCase)).toBe(0);
	});

	test("31 個以上の引数を指定した場合、エラーが発生すること", () => {
		const testCase1 = Array(30).fill(1);
		expect(add(testCase1)).toBe(30);

		const testCase2 = Array(31).fill(1);
		expect(() => add(testCase2)).toThrow();
	});

	test("数字以外の引数を受け取った場合、エラーが発生すること", () => {
		const testCase = ["hoge"];
		expect(() => add(testCase)).toThrow();
	});

	test("数字以外の引数を含む配列を受け取った場合、エラーが発生すること", () => {
		const testCase = [10, "hoge", 10];
		expect(() => add(testCase)).toThrow();
	});

	test("計算結果が 1000 を超える場合、合計ではなく「too big」と文字列が返ること", () => {
		const testCase1 = [1000];
		expect(add(testCase1)).toBe(1000);

		const testCase2 = [1000, 1];
		expect(add(testCase2)).toBe("too big");
	});
});

describe("multiply関数のテスト", () => {
	test("[3]を受け取った場合、 3 が返ること", () => {
		const testCase = [3];
		expect(multiply(testCase)).toBe(3);
	});

	test("[3, 10, 3]を受け取った場合、 90 が返ること", () => {
		const testCase = [3, 10, 3];
		expect(multiply(testCase)).toBe(90);
	});

	test("[]を受け取った場合、 0 が返ること", () => {
		const testCase = [];
		expect(multiply(testCase)).toBe(0);
	});

	test("31 個以上の引数を指定した場合、エラーが発生すること", () => {
		const testCase1 = Array(30).fill(1);
		expect(multiply(testCase1)).toBe(1);

		const testCase2 = Array(31).fill(1);
		expect(() => multiply(testCase2)).toThrow();
	});

	test("数字以外の引数を受け取った場合、エラーが発生すること", () => {
		const testCase = ["hoge"];
		expect(() => multiply(testCase)).toThrow();
	});

	test("数字以外の引数を含む配列を受け取った場合、エラーが発生すること", () => {
		const testCase = [10, "hoge", 10];
		expect(() => multiply(testCase)).toThrow();
	});

	test("計算結果が 1000 を超える場合、合計ではなく「big big number」と文字列が返ること", () => {
		const testCase1 = [10, 10, 10];
		expect(multiply(testCase1)).toBe(1000);

		const testCase2 = [7, 11, 13];
		expect(multiply(testCase2)).toBe("big big number");
	});
});
