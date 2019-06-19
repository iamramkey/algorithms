function solution(a) {
  const length = a.length;
  const map = Array(length).fill(false);
  for (let i = 0; i < length; i++) {
    const item = a[i];
    if (item < 1 || item > length) {
      continue;
    }
    map[item - 1] = true;   
  }
  for (let i = 0; i < length; i++) {
    if (!map[i]) {
      return i + 1;
    }
  }
  return length + 1;
}
console.log(solution([-1, -3]));