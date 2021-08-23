const { UniqueRand } = require('./UniqueRand');

function isUnique(arr: number[], min: number, max: number) {

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

    for (let j = 0; j < i; j++) {
      if (n == arr[j]) {
        console.log(n + ' repeats.')
        ok = false;
        break;
      }
    }
  }
  console.log(ok ? '  Passed' : '  Failed');
}

function runSingleTest(min: number, max: number) {

  let uniqueRandObj = new UniqueRand();
  let arr = uniqueRandObj.getRandArr(min, max);
  console.log('final arr = ' + arr);
  isUnique(arr, min, max);
}

function testRand() {
  runSingleTest(1, 1);
  runSingleTest(1, 2);
  runSingleTest(1, 3);


  runSingleTest(0, 10);

  runSingleTest(0.2, 9.3);

  runSingleTest(-0.2, 9.3);
  
  runSingleTest(-20.2, -9.3);

  runSingleTest(-5, 8);

  runSingleTest(1, 15);

  runSingleTest(5, 95);
}

testRand();