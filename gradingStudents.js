function gradingStudents(arr) {
  const grades = arr.map((item) => {
    if (item < 38) return item;
    if (item % 5 > 2) {
      //will round
      var restToRound = Math.abs((item % 5) - 5);
      return item + restToRound;
    } else {
      return item;
    }
  });
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
var grade = 84;
//console.log(grade + Math.abs((grade % 5) - 5));
