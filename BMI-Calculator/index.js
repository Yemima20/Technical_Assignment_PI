const bmiForm = document.querySelector("#bmi-form");
let result = document.getElementById("result");

bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // CALCULATE WEIGHT AND HEIGHT
  let calculate = Number.parseFloat(
    (weight / Math.pow(height / 100, 2)).toFixed(1)
  );

  // SHOW RESULT BASE ON CALCULATE VALUE
  if (calculate < 18.5) {
    result.innerHTML += `<p style ="text-align: left;">Your BMI is <b>${calculate}</b>. The result is, your BMI is <b>Underweight</b></p>`;
  } else if (calculate >= 18.5 && calculate <= 24.9) {
    result.innerHTML += `<p style ="text-align: left;">Your BMI is <b>${calculate}</b>. The result is, your BMI is <b>Normal</b></p>`;
  } else if (calculate >= 25 && calculate <= 29.9) {
    result.innerHTML += `<p style ="text-align: left;">Your BMI is <b>${calculate}</b>. The result is, your BMI is <b>Overweight</b></p>`;
  } else if (calculate >= 30) {
    result.innerHTML += `<p style ="text-align: left;">Your BMI is <b>${calculate}</b>. The result is, your BMI is <b>Obesity</b></p>`;
  } else {
    result.innerHTML += `<p>Result not found</p>`;
  }
});

// RESET FORM & RESULT INNERHTML WHEN BLUR
resetForm = () => {
  bmiForm.reset();
  result.innerHTML = ``;
};