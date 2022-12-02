
/* Math Helpers */
function getMean(nums) {
    return nums.reduce((acc, val) => acc + val) / nums.length
}

function getMedian(nums) {
    const sorted = Array.from(nums).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function getMode(nums) {
    let frequency = []; // array of frequency.
    let maxFreq = 0; // holds the max frequency.
    let modes = [];
  
    for (let i in nums) {
      frequency[nums[i]] = (frequency[nums[i]] || 0) + 1; // increment frequency.
  
      if (frequency[nums[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[nums[i]]; // update max.
      }
    }
  
    for (let k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
    return modes;
  }

  module.exports = {getMean, getMedian, getMode}