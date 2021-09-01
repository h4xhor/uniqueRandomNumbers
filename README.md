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
 PASS  src/uniqueRand.test.ts
  ✓ all (59 ms)

  console.log
    runSingleTest(1, 1) = [1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(1, 2) = [1,2] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(1, 3) = [3,1,2] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(0, 10) = [6,1,9,0,8,10,2,4,7,5,3] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(0.2, 9.3) = [4,1,3,0,7,9,8,2,10,6,5] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(-0.2, 9.3) = [3,-1,1,10,7,9,5,6,8,4,2,0] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(-20.2, -9.3) = [-10,-14,-13,-19,-16,-11,-12,-9,-20,-17,-21,-18,-15] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(-5, 8) = [-5,6,5,3,7,-4,-1,-2,0,4,2,1,8,-3] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(1, 15) = [15,13,1,9,3,5,4,8,11,2,6,12,14,7,10] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(5, 95) = [49,55,31,37,16,48,47,22,95,36,12,8,50,39,84,79,45,69,94,60,71,14,17,33,40,27,44,67,21,52,43,85,92,9,6,76,20,23,77,82,53,87,24,41,42,62,18,65,28,26,30,29,80,90,89,68,35,51,46,19,78,11,25,34,56,81,61,15,38,64,54,63,5,70,32,57,73,83,66,75,7,86,59,13,93,58,74,88,10,91,72] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:60:13)

  console.log
    runSingleTest(0, 10, 5) = [0,4,8,3,5] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(0.2, 9.3, 5) = [5,2,0,10,3] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(-0.2, 9.3, 5) = [9,8,5,1,-1] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(-20.2, -9.3, 5) = [-20,-10,-19,-13,-17] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(-5, 8, 5) = [-2,4,5,0,6] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(1, 15, 6) = [7,3,8,11,2,6] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)

  console.log
    runSingleTest(5, 95, 8) = [52,20,29,35,90,45,83,78] ... Passed

      at runSingleTest (src/uniqueRand.test.ts:58:13)
```
</details>
 
# Feedback

Any constructive feedback / suggestions / new feature requests welcome!
