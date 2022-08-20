// * The function accepts following parameters:
// *  1. INTEGER s Sams House starting spot
// *  2. INTEGER t Sams House Ending spot
// *  3. INTEGER a Apple tree
// *  4. INTEGER b Orange tree
// *  5. INTEGER_ARRAY  Array of distances from the Apple Tree
// *  6. INTEGER_ARRAY  Array of distances from the Orange Tree

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesFinalPosition = apples.map((item) => {
    return item + a;
  });
  const orangesFinalPosition = oranges.map((item) => {
    return item + b;
  });
  console.log(applesFinalPosition, orangesFinalPosition);
  var counterApples = 0;
  var counterOranges = 0;
  applesFinalPosition.forEach((item) => {
    if (item >= s && item <= t) counterApples++;
  });
  orangesFinalPosition.forEach((item) => {
    if (item >= s && item <= t) counterOranges++;
  });
  console.log(counterApples);
  console.log(counterOranges);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

//_ _ _ _ _ _ _ _ _ _ _ _ _
//_ _ _ _ _ _ _ _ _ _ _ _ _
