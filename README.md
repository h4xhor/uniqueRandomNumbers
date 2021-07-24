# Unique Random Numbers Generator (JavaScript)

Generates unique random numbers between a minimum and maximum (inclusive). Negative numbers supported.

Example:

min = -5

max = 8

sample output: -3,-1,3,0,5,6,2,-4,-5,8,4,-2,1,7

## Usage Instructions

### As A Module

To use `uniqueRand.js` in your JavaScript project here is an example. Modify to suit your needs:

```
const uniqueRandObj = require('./uniqueRand.js');

let min = -5;
let max = 8;
let arr = uniqueRandObj.getRandArr(min, max);
console.log('unique random numbers = ' + arr);
```

### Embedded

If you would rather embed the functions in your project please use `uniqueRandStandalone.js`.

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
