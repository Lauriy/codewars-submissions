var findAverage = function (nums) {
    var sum = 0;
    for (var i = 0, l = nums.length; i < l; i += 1) {
        sum += nums[i];
    }

    return sum / nums.length;
};