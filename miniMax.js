function minimax(arr) {
  const min = [...arr].sort((a, b) => a - b);
  const max = [...arr].sort((a, b) => b - a);
  var minSum = 0;
  var maxSum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    minSum += min[i];
    maxSum += max[i];
  }
  console.log(minSum + " " + maxSum);
}

minimax([1, 2, 3, 4, 5]);
