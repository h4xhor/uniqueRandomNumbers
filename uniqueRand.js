'use strict';

module.exports = {

  /* - returns a random number out of the universe
   * - removes it from the universe
   */
  getRand: function(universe) {
    let max = universe.length;
    let i = Math.floor(Math.random() * max)
    let number = universe[i];
    universe.splice(i, 1);
    return number;
  },

  /* get array of random numbers between 0 and max - 1
   */
  getUniqueRand: function(arr, universe, max) {
    if (0 == arr.length) {
      arr.push(this.getRand(universe));
      //console.log('first item ' + arr[0]);

    } else {
      let rand = this.getRand(universe);
      arr.push(rand);
    }
  },

  getRandArr: function(min, max) {
    
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
        this.getUniqueRand(arr, universe, range);
      }

      for (let i = 0; i < range; i++) {
        arr[i] += min;
      }
    }

    return arr;
  }
}


