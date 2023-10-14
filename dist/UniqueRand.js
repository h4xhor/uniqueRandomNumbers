'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueRand = void 0;
var UniqueRand = /** @class */ (function () {
    function UniqueRand() {
    }
    /* - returns a random number out of the universe
     * - removes it from the universe
     */
    UniqueRand.getRand = function (universe) {
        var max = universe.length;
        var i = Math.floor(Math.random() * max);
        var number = universe[i];
        universe.splice(i, 1);
        return number;
    };
    /* get array of random numbers between 0 and max - 1
     */
    UniqueRand.getUniqueRand = function (arr, universe, max) {
        arr.push(this.getRand(universe));
    };
    UniqueRand.getRandArr = function (min, max, count) {
        var arr = [];
        if (min > max) {
            return arr;
        }
        min = Math.floor(min);
        max = Math.ceil(max);
        var universe = [];
        var range = max - min + 1;
        if (typeof count === "undefined") {
            count = range;
        }
        else {
            // Limit count to the maximum possible
            var max_count = max - min + 1;
            if (count > max_count) {
                count = max_count;
            }
        }
        for (var i = 0; i < range; i++) {
            universe.push(i);
        }
        for (var i = 0; i < count; i++) {
            this.getUniqueRand(arr, universe, range);
        }
        for (var i = 0; i < count; i++) {
            arr[i] += min;
        }
        return arr;
    };
    return UniqueRand;
}());
exports.UniqueRand = UniqueRand;
