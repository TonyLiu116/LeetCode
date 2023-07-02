function dfs(i, distribute, cookies, k, zeroCount) {
  if (cookies.length - i < zeroCount) {
    return Infinity;
  }

  if (i === cookies.length) {
    return Math.max(...distribute);
  }

  let answer = Infinity;
  for (let j = 0; j < k; ++j) {
    zeroCount -= distribute[j] === 0 ? 1 : 0;
    distribute[j] += cookies[i];

    answer = Math.min(answer, dfs(i + 1, distribute, cookies, k, zeroCount));

    distribute[j] -= cookies[i];
    zeroCount += distribute[j] === 0 ? 1 : 0;
  }

  return answer;
}

function distributeCookies(cookies, k) {
  const distribute = new Array(k).fill(0);

  return dfs(0, distribute, cookies, k, k);
}
