/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
    let count = 0;
  while (s.includes('01')) {
    s = s.replace(/01/g, '10');
    count++;
  }
  return count;
};