$(document).ready(function() {
    $("#calculateBtn").click(function() {
      const weight = parseFloat($("#weight").val());
      const height = parseFloat($("#height").val()) / 100; // Convert to meters
      const age = parseInt($("#age").val());
      const gender = $("#gender").val();
  
      const bmi = weight / (height * height);
      const bmr = calculateBMR(weight, height, age, gender);
  
      $("#bmiResult").text(bmi.toFixed(2));
      $("#bmrResult").text(bmr.toFixed(2));
      
      $(".results").css("display", "block");
    });
  });
  
  function calculateBMR(weight, height, age, gender) {
    let bmr = 0;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
    } else if (gender === "female") {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    }
    return bmr;
  }
  