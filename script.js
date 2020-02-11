function CheckEligibilityUser() {
  let e = document.getElementById("Requirements");
  let Requirements = e.options[e.selectedIndex].value;
  if (Requirements == "") {
    alert("please select Requirements");
  }
  console.log("Requirements", Requirements);

  let e1 = document.getElementById("Nationality");
  let Nationality = e1.options[e1.selectedIndex].value;
  if (Nationality == "") {
    alert("please select Nationality");
  }
  console.log("Nationality", Nationality);

  let age = document.getElementById("ageLimit").value;
  if (age == "") {
    alert("please select age");
  } else if (age <= 23) {
    alert("Sorry.....Your age is less than 23 years");
  } else if (age >= 70) {
    alert("Sorry.....Your age is greater than 70 years");
  }
  console.log("age", age);

  let income = document.getElementById("monthlyIncome").value;
  if (income <= 70000)
    alert("Sorry Your Income is Less Your Are Not Eleigible");


 }
// calculate the amount
function CheckEligibility() {
  //select house area
  var totalValue = 700000;
  var e = document.getElementById("houseArea");
  var houseArea = e.options[e.selectedIndex].value;

  if (houseArea == "") {
    alert("please select house area");
  }
  document.getElementById("demo").innerHTML = "hlw mjahid" + houseArea;
  console.log("check", houseArea);

  //select downpayment
  var e = document.getElementById("Downpayment");
  var payment = e.options[e.selectedIndex].value;

  if (payment == "") {
    alert("please select Downpayment");
  }
  console.log("check", payment);

  //select Markupwill
  var e = document.getElementById("Markupwill");
  var Markup = e.options[e.selectedIndex].value;
  if (Markup == "") {
    alert("please select Markupwill");
  }

  console.log("check", Markup);

  //select Number of years of installments
  var e = document.getElementById("years");
  var year = e.options[e.selectedIndex].value;
  if (year == "") {
    alert("please select Number of years of installments");
  }
  console.log("check", year);
  let downpay = totalValue * (payment / 100);
  console.log("downpay", downpay);

  let remainingValue = totalValue - downpay;
  console.log("remainingValue", remainingValue);

  let MarkupValuePerAnum = Math.round(remainingValue * (Markup / 100));
  console.log("MarkupValuePerAnum", MarkupValuePerAnum);

  let markperMonth = MarkupValuePerAnum / 12;
  console.log("markperMonth", markperMonth);

  let monthInstallmentWithOutMarkup = remainingValue / year;
  console.log("monthInstallmentWithOutMarkup", monthInstallmentWithOutMarkup);

  let TotalmonthInstallment = monthInstallmentWithOutMarkup + markperMonth;
  console.log("TotalmonthInstallment", TotalmonthInstallment);
}
