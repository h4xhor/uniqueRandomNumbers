
import 'jest';

const { UniqueRand } = require('./UniqueRand');

function isUnique(arr: number[], min: number, max: number): boolean {

  let ok = true;

  min = Math.floor(min);
  max = Math.ceil(max);

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n < min) {
      console.log(n + ' < ' + min + '.')
      ok = false;
      break;
    }

    if (n > max) {
      console.log(n + ' > ' + max + '.')
      ok = false;
      break;
    }

		let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (n == arr[j]) {
				count++;
      }
    }

		if (count > 1) {
			console.log(n + ' repeats ' + count + ' times.')
			ok = false;
		}
  }

  return ok;
}

function runSingleTest(min: number, max: number, count?: number) {

  let hasCount: boolean;

	let min2 = Math.floor(min);
	let max2 = Math.ceil(max);
	let range = max2 - min2 + 1;

  if (typeof count === "undefined") {
    count = range;

    hasCount = false;
  } else {
    hasCount = true;
  }

  let arr = UniqueRand.getRandArr(min, max, count);
  let ok = isUnique(arr, min, max);

	if (count < 0) {
		ok = ok && (arr.length === 0)
	} else if (count > range) {
		ok = ok && (arr.length === range)
	} else {
		ok = ok && (arr.length === count)
	}

  if (hasCount) {
    console.log(`runSingleTest(${min}, ${max}, ${count}) = [${arr}] ... ${ok ? "Passed" : "Failed"}` );
  } else {
    console.log(`runSingleTest(${min}, ${max}) = [${arr}] ... ${ok ? "Passed" : "Failed"}`);
  }

  return ok;
}

test("all", () => {
  expect(runSingleTest(1, 1)).toBe(true);
  expect(runSingleTest(1, 2)).toBe(true);
  expect(runSingleTest(1, 3)).toBe(true);
  expect(runSingleTest(0, 10)).toBe(true);
  expect(runSingleTest(0.2, 9.3)).toBe(true);
  expect(runSingleTest(-0.2, 9.3)).toBe(true);
  expect(runSingleTest(-20.2, -9.3)).toBe(true);
  expect(runSingleTest(-5, 8)).toBe(true);
  expect(runSingleTest(1, 15)).toBe(true);
  expect(runSingleTest(5, 95)).toBe(true);

  expect(runSingleTest(0, 10, 5)).toBe(true);
  expect(runSingleTest(0.2, 9.3, 5)).toBe(true);
  expect(runSingleTest(-0.2, 9.3, 5)).toBe(true);
  expect(runSingleTest(-20.2, -9.3, 5)).toBe(true);
  expect(runSingleTest(-5, 8, 5)).toBe(true);
  expect(runSingleTest(1, 15, 6)).toBe(true);
  expect(runSingleTest(5, 95, 8)).toBe(true);

	// test count is > max - min + 1
  expect(runSingleTest(1, 5, 6)).toBe(true);

	// test count is > max - min + 1, with negative min
  expect(runSingleTest(-2, 5, 88)).toBe(true);

	// test count is < 0 
  expect(runSingleTest(1, 5, -8)).toBe(true);

	// test count is < 0, with negative min
  expect(runSingleTest(-8, 5, -8)).toBe(true);

	// test max < min
  expect(runSingleTest(8, -1, -8)).toBe(true);
});

