'use strict';

export class UniqueRand {

  /* - returns a random number out of the universe
   * - removes it from the universe
   */
  getRand(universe: number[]) {
    let max = universe.length;
    let i = Math.floor(Math.random() * max)
    let number = universe[i];
    universe.splice(i, 1);
    return number;
  }

  /* get array of random numbers between 0 and max - 1
   */
  getUniqueRand(arr: number[], universe: number[], max: number) {
    if (0 == arr.length) {
      arr.push(this.getRand(universe));
      //console.log('first item ' + arr[0]);

    } else {
      let rand = this.getRand(universe);
      arr.push(rand);
    }
  }

  getRandArr(min: number, max: number, count?: number) {
    
    let arr = [];

    if (min > max) {

    } else {

      min = Math.floor(min);
      max = Math.ceil(max);

      let universe = [];

      let range = max - min + 1;

      if (typeof count === "undefined") {
        count = range;
      }

      for (let i = 0; i < range; i++) {
        universe.push(i); 
      }

      for (let i = 0; i < count; i++) {
        this.getUniqueRand(arr, universe, range);
      }

      for (let i = 0; i < count; i++) {
        arr[i] += min;
      }
    }

    return arr;
  }
}


