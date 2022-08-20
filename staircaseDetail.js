function staircase(n) {
  var counter = n;
  var base = new Array(n).fill(" ");
  for (var i = n; i > 0; i--) {
    base[i] = "#";
    console.log(base.join(""));
  }
}

staircase(6);
