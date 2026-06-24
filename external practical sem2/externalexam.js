// Function to check if number is even or odd
function checkNumber(event) {
  event.preventDefault(); // Prevent form reload

  // Get the number entered by user
  let num = document.getElementById("numberInput").value;
  num = parseInt(num);

  let resultDiv = document.getElementById("result");

  // Clear previous result styling
  resultDiv.className = "";

  // Check using if-else
  if (isNaN(num)) {
    resultDiv.innerText = "⚠️ Please enter a valid number!";
    resultDiv.style.color = "orange";
  } else if (num % 2 === 0) {
    resultDiv.innerText = num + " is Even ✅";
    resultDiv.classList.add("even");
  } else {
    resultDiv.innerText = num + " is Odd ❌";
    resultDiv.classList.add("odd");
  }
}

// Attach event listener to form
document.getElementById("numberForm").addEventListener("submit", checkNumber);
