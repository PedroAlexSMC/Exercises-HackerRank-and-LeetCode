function plusMinus(arr) {
  var amount = arr.length;
  var biggerThanZero = 0;
  var smallerThanZero = 0;
  var zeros = 0;
  for (var i = 0; i < amount; i++) {
    if (arr[i] > 0) {
      biggerThanZero++;
    }
    if (arr[i] < 0) {
      smallerThanZero++;
    }
    if (arr[i] == 0) {
      zeros++;
    }
  }
  console.log(parseFloat(biggerThanZero / amount).toFixed(6));
  console.log(parseFloat(smallerThanZero / amount).toFixed(6));
  console.log(parseFloat(zeros / amount).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
