let form = document.getElementsByClassName("form")[0];
let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let popup = document.querySelector(".popup");
let bmiScore = document.querySelector(".bmi-score");
let bmiText = document.querySelector(".bmi-text");
let closeBTN = document.querySelector(".close-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let heightValue = parseInt(height.value);
  let weightValue = parseInt(weight.value);
  let text;
  let color;

  if (heightValue == "" || heightValue < 0 || isNaN(heightValue)) {
    alert("Please enter a valid height");
    height.focus();
  } else if (weightValue == "" || weightValue < 0 || isNaN(weightValue)) {
    alert("Please enter a valid weight");
    weight.focus();
  } else {
    const BMI = ((weightValue / (heightValue * heightValue)) * 10000).toFixed(
      2
    );

    if (BMI < 18.5) {
      text = "You are underweight";
      color = "#00BFFF";
    } else if (BMI >= 18.5 && BMI < 25) {
      text = "You have a healthy weight";
      color = "#28a745";
    } else if (BMI >= 25 && BMI < 30) {
      text = "You are overweight";
      color = "#FFA500";
    } else {
      text = "You are obese";
      color = "#DC3545";
    }

    popup.style.display = "flex";
    bmiScore.innerHTML = BMI;
    bmiText.innerHTML = text;
    bmiScore.style.background = color;
    height.value = "";
    weight.value = "";
  }
});

closeBTN.addEventListener("click", function () {
  popup.style.display = "none";
});
