function timeConversion(s) {
  var finalHour = "";
  if (s.includes("PM")) {
    const splittedAM = s.replace("PM", "").split(":");
    if (splittedAM[0] != 12) {
      splittedAM[0] = hourConverter(splittedAM[0]);
    }
    finalHour = splittedAM.join(":");
    console.log(splittedAM);
  } else {
    const splittedPM = s.replace("AM", "").split(":");
    if (splittedPM[0] == "12") {
      splittedPM[0] = "00";
    }
    finalHour = splittedPM.join(":");
  }
  return finalHour;
}

console.log(timeConversion("12:01:00AM"));

function hourConverter(hour) {
  return Number.parseInt(hour) + 12;
}
