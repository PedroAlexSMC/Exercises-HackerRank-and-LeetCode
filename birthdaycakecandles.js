function birthdayCakeCandles(candles) {
  const ordenatedCandles = [...candles].sort((a, b) => b - a);
  var counter = 0;
  var index = 0;
  do {
    counter++;
    index++;
  } while (ordenatedCandles[index] == ordenatedCandles[index - 1]);
  return counter;
}

birthdayCakeCandles([3, 2, 1, 3, 4, 6]);
