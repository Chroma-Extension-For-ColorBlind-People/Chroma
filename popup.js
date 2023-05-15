function giveRangeValue() {
  var range = document.getElementById("customRange1").value;
  var range2 = document.getElementById("customRange2").value;
  console.log(range);
  console.log(range2);
  // console.log(green);
}
document.querySelector(".mybtn").addEventListener("click", giveRangeValue);
