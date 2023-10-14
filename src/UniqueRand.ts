'use strict';

export class UniqueRand {

  /* - returns a random number out of the universe
   * - removes it from the universe
   */
  static getRand(universe: number[]): number {
    let max = universe.length;
    let i = Math.floor(Math.random() * max)
    let number = universe[i];
    universe.splice(i, 1);
    return number;
  }

  /* get array of random numbers between 0 and max - 1
   */
  static getUniqueRand(arr: number[], universe: number[], max: number) {
      arr.push(this.getRand(universe));
  }

  static getRandArr(min: number, max: number, count?: number): number[] {
    
    let arr: number[] = [];

    if (min > max) {
			return arr;
    } 

		min = Math.floor(min);
		max = Math.ceil(max);

		let universe = [];

		let range = max - min + 1;

		if (typeof count === "undefined") {
			count = range;
		} else {

			// Limit count to the maximum possible
			let max_count = max - min + 1;
			if (count > max_count) {
				count = max_count;
			}
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

    return arr;
  }
}


