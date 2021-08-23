var UniqueRand = require('./UniqueRand').UniqueRand;
function isUnique(arr, min, max) {
    var ok = true;
    min = Math.floor(min);
    max = Math.ceil(max);
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (n < min) {
            console.log(n + ' < ' + min + '.');
            ok = false;
            break;
        }
        if (n > max) {
            console.log(n + ' > ' + max + '.');
            ok = false;
            break;
        }
        for (var j = 0; j < i; j++) {
            if (n == arr[j]) {
                console.log(n + ' repeats.');
                ok = false;
                break;
            }
        }
    }
    console.log(ok ? '  Passed' : '  Failed');
}
function runSingleTest(min, max, count) {
    if (typeof count === "undefined") {
        var min2 = Math.floor(min);
        var max2 = Math.ceil(max);
        var range = max2 - min2 + 1;
        count = range;
    }
    var uniqueRandObj = new UniqueRand();
    var arr = uniqueRandObj.getRandArr(min, max, count);
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
    runSingleTest(0, 10, 5);
    runSingleTest(0.2, 9.3, 5);
    runSingleTest(-0.2, 9.3, 5);
    runSingleTest(-20.2, -9.3, 5);
    runSingleTest(-5, 8, 5);
    runSingleTest(1, 15, 6);
    runSingleTest(5, 95, 8);
}
testRand();
