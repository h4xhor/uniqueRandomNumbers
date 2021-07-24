'use strict';


/* - returns a random number out of the universe
 * - removes it from the universe
 */
function getRand(universe) {
  let max = universe.length;
  let i = Math.floor(Math.random() * max)
  let number = universe[i];
  universe.splice(i, 1);
  return number;
}

/* get array of random numbers between 0 and max - 1
 */
function getUniqueRand(arr, universe, max) {
  if (0 == arr.length) {
    arr.push(getRand(universe));
    //console.log('first item ' + arr[0]);

  } else {
    let rand = getRand(universe);
    arr.push(rand);
  }
}

function getRandArr(min, max) {
  
  let arr = [];

  if (min > max) {

  } else {
    min = Math.floor(min);
    max = Math.ceil(max);

    let universe = [];

    let range = max - min + 1;

    for (let i = 0; i < range; i++) {
      universe.push(i); 
    }

    for (let i = 0; i < range; i++) {
      getUniqueRand(arr, universe, range);
    }

    for (let i = 0; i < range; i++) {
      arr[i] += min;
    }
  }

  return arr;
}

