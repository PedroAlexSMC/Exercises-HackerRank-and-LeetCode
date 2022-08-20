function compareTriplets(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result.push(1);
    if (a[i] < b[i]) result.push(1);
  }
  return result;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
