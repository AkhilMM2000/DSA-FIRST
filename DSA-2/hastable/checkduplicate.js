let arr = [2, 1, 4, 13];
function checkduplicate(arr) {
  const map = new Map();
  for (const val of arr) {
    if (map.has(val)) {
      return false;
    } else {
      map.set(val, 0);
    }
  }
  return true;
}
console.log(checkduplicate(arr));
