# Unique Random Numbers Generator (TypeScript / JavaScript)

Generates unique random numbers between a minimum and maximum (inclusive). Negative numbers supported.

Example:

min = -5

max = 8

sample output: -3,-1,3,0,5,6,2,-4,-5,8,4,-2,1,7

## Install Instructions

Best way is to use `npm`:

```
npm i --save uniquerand
```

## Usage Instructions

### TypeScript

For TypeScript need `@types/node` to use `require()`:

```
npm i --save-dev @types/node
```

To use `UniqueRand.ts` in your TypeScript project here is an example. Modify to suit your needs:

```
const { UniqueRand } = require("uniquerand");

let min = -5;
let max = 8;
let arr = UniqueRand.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

Note that the member function getRandArr is static so no need to instantiate the UniqueRand class before use.

If numbers with decimals are given it will round the `min` to the next lowest int it closest to and for the `max` to next highest int it is closest to. Eg:

```
let min = 0.2; 
let max = 9.3;
let arr = UniqueRand.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

The min and max will be rounded and will effectively be as if you used:

```
min = 0
max = 10
```

sample output: 8,0,10,3,6,4,1,5,2,9,7

You may also pass an optional `count` argument that specifies the number of random numbers to return eg:

```
let min = 0.2; 
let max = 9.3;
let count = 5;
let arr = UniqueRand.getRandArr(min, max, count);
console.log('unique random numbers = ' + arr);
```
sample output: 1,9,3,5,10

### JavaScript

To use `UniqueRand.js` in your JavaScript project here is an example. Modify to suit your needs:

```
let { UniqueRand } = require("uniquerand");

let min = -5;
let max = 8;
let arr = UniqueRand.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```
Note that the member function getRandArr is static so no need to instantiate the UniqueRand class before use.

If numbers with decimals are given it will round the `min` to the next lowest int it closest to and for the `max` to next highest int it is closest to. Eg:

```
let min = 0.2; 
let max = 9.3;
let arr = UniqueRand.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

The min and max will be rounded and will effectively be as if you used:

```
min = 0
max = 10
```

sample output: 8,0,10,3,6,4,1,5,2,9,7

You may also pass an optional `count` argument that specifies the number of random numbers to return eg:

```
let min = 0.2; 
let max = 9.3;
let count = 5;
let arr = UniqueRand.getRandArr(min, max, count);
console.log('unique random numbers = ' + arr);
```
sample output: 1,9,3,5,10

## TypeScript Testing Instructions

Change directory to the module uniquerand then install dependencies:

```
npm install
```

Run Jest tests:

```
npm run test
```

Note: above is an alias to `jest src`.

<details>
  <summary>Click to show example test run.</summary>

```
$ npm run test

> uniquerand@1.0.6 test
> jest src

 PASS  src/uniqueRand.test.ts
  ✓ all (46 ms)

  console.log
    runSingleTest(1, 1) = [1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(1, 2) = [1,2] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(1, 3) = [3,1,2] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(0, 10) = [9,4,0,10,5,6,1,3,2,7,8] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(0.2, 9.3) = [5,3,8,9,10,1,2,4,0,6,7] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(-0.2, 9.3) = [9,5,2,0,10,-1,7,8,3,4,6,1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(-20.2, -9.3) = [-11,-18,-15,-19,-16,-12,-13,-20,-21,-14,-9,-10,-17] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(-5, 8) = [-2,3,5,-3,2,7,0,-1,4,1,8,-5,6,-4] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(1, 15) = [13,10,5,4,7,11,9,8,15,12,14,2,1,6,3] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(5, 95) = [9,41,34,14,67,93,17,69,76,5,15,88,74,50,8,57,83,72,75,19,45,28,26,25,22,20,35,23,49,40,92,33,84,53,80,61,77,31,82,16,64,48,12,65,32,10,56,43,6,51,36,37,39,70,44,94,73,90,59,24,89,47,66,30,91,60,13,29,18,71,95,58,81,78,55,11,27,68,52,86,54,87,46,38,85,7,79,63,62,21,42] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:73:13)

  console.log
    runSingleTest(0, 10, 5) = [9,7,3,10,2] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(0.2, 9.3, 5) = [6,3,0,7,4] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(-0.2, 9.3, 5) = [8,0,10,6,-1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(-20.2, -9.3, 5) = [-10,-17,-15,-18,-20] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(-5, 8, 5) = [-5,0,2,7,5] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(1, 15, 6) = [5,7,8,4,15,14] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(5, 95, 8) = [23,50,77,37,74,75,30,84] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(1, 5, 6) = [2,3,4,5,1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(-2, 5, 88) = [3,2,-2,0,4,-1,5,1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(1, 5, -8) = [] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(-8, 5, -8) = [] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

  console.log
    runSingleTest(8, -1, -8) = [] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:71:13)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.369 s, estimated 2 s
Ran all test suites matching /src/i.
```
</details>
 
# Feedback

Any constructive feedback / suggestions / new feature requests welcome!
