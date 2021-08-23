# Unique Random Numbers Generator (TypeScript / JavaScript)

Generates unique random numbers between a minimum and maximum (inclusive). Negative numbers supported.

Example:

min = -5

max = 8

sample output: -3,-1,3,0,5,6,2,-4,-5,8,4,-2,1,7

## Usage Instructions

### TypeScript

To use `UniqueRand.ts` in your TypeScript project here is an example. Modify to suit your needs:

```
const { UniqueRand } = require('./UniqueRand');
let uniqueRandObj = new UniqueRand();

let min = -5;
let max = 8;
let arr = uniqueRandObj.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

If numbers with decimals are given it will round the `min` to the next lowest int it closest to and for the `max` to next highest int it is closest to. Eg:

```
let min = 0.2; 
let max = 9.3;
let arr = uniqueRandObj.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

The min and max will be rounded and will effectively be as if you used:

```
min = 0
max = 10
```

sample output: 8,0,10,3,6,4,1,5,2,9,7

### JavaScript

To use `UniqueRand.js` in your JavaScript project here is an example. Modify to suit your needs:

```
let UniqueRand = require('./UniqueRand').UniqueRand;
let uniqueRandObj = new UniqueRand();

let min = -5;
let max = 8;
let arr = uniqueRandObj.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

If numbers with decimals are given it will round the `min` to the next lowest int it closest to and for the `max` to next highest int it is closest to. Eg:

```
let min = 0.2; 
let max = 9.3;
let arr = uniqueRandObj.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

The min and max will be rounded and will effectively be as if you used:

```
min = 0
max = 10
```

sample output: 8,0,10,3,6,4,1,5,2,9,7

## Testing Instructions

Install dependencies:
```
npm install
```

Initialize Jasmine
```
node node_modules/jasmine/bin/jasmine init
```

and run tests:

```
node uniqueRandTest.js
```
  
# Feedback

Any constructive feedback / suggestions / new feature requests welcome!
