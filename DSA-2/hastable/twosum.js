let target = 13;
let arr = [12, 5, 2, 3, 8, 4];
function twosum(arr, target) {
  const maps = new Map();
  for (let i = 0; i < arr.length; i++) {
    let ballence = target - arr[i];
    if (maps.has(ballence)) {
      return [maps.get(ballence), i];
    } else {
      maps.set(arr[i], i);
    }
  }

  return [];
}
console.log(twosum(arr, target));

