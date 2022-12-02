const {getMean, getMedian, getMode} = require('./math')

describe("mean function", function () {
    test('return correct mean', function () {
        let mean = getMean([1,2,3]);
        expect(mean).toEqual(2);
    });
});

describe ("median function", function() {
    test('return correct median - odd amt of nums', function() {
        let median = getMedian([1,2,3])
        expect(median).toEqual(2)
    })
    test('return correct median - even amt of nums', function () {
        let median = getMedian([1,2,3,4])
        expect(median).toEqual(2.5)
    })
})

describe("mode function", function () {
    test('return correct mode', function () {
        let mean = getMode([1,1,2,3]);
        expect(mean).toEqual(["1"]);
    });

    test('return multiple modes', function () {
        let mode = getMode([1,1,2,2,3,3,4,5,65])
        expect(mode).toEqual(["1","2","3"])
    })
});

