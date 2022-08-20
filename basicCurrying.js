//sum of all parameters in f(a)(b)(c)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(6)(5)(4));
