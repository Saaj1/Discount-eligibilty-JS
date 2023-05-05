function checkEligibility() {

  // Get user input for age and membership status
  let age = parseInt(document.getElementById("age").value);
  let isMember = document.getElementById("member").value === "yes";

  // Check eligibility for discount
  let isEligible = false;

  if (age >= 18 && isMember || age >= 65) {
    isEligible = true;
  }

  // Display eligibility message
  let result = document.getElementById("result");
  if (isEligible) {
    result.innerHTML = "Congratulations! You are eligible for a discount.";
    result.style.color = "#007200";
  } else {
    result.innerHTML = "Sorry, you are not eligible for a discount.";
    result.style.color = "#ff0000";
  }
}
