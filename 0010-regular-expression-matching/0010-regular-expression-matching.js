/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m+1).fill(false).map(() => new Array(n+1).fill(false)); // initialize a 2D dp array with 'false'
    dp[0][0] = true; // empty string matches empty pattern
    // initialize the first row of dp array
    for (let j = 1; j <= n; j++) {
        if (p[j-1] === '*') {
            dp[0][j] = dp[0][j-2]; // '*' can match zero of the preceding character
        }
    }
    // fill the remaining elements of dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i-1] === p[j-1] || p[j-1] === '.') { // case 1 and 2
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] === '*') { // case 3
                dp[i][j] = dp[i][j-2]; // matches zero of the preceding character
                if (s[i-1] === p[j-2] || p[j-2] === '.') { // matches one or more of the preceding character
                    dp[i][j] = dp[i][j] || dp[i-1][j];
                }
            } else { // s[i-1] != p[j-1], so the current characters don't match
                dp[i][j] = false;
            }
        }
    }
    return dp[m][n];
};