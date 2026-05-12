function calculateResults() {
    let n = document.getElementById("Subjects").value;
    let total =0;
    for (let i = 1; i <= n; i++) {
        let mark = parseFloat(prompt("Enter marks for subject " + i));
        total += mark; 
    }
let average = total / n;
let grade;
let result;
if (average >= 90) {
    grade = "A+";
} else if (average >= 75) {
    grade = "A";
} else if (average >= 60) {
    grade = "B";
} 
else if (average >= 50) {
    grade = "C";
}
else if (average >= 40) {
    grade = "D";
}

else {
    grade = "E";
}

if (average >= 40) {
    result = "Pass";
}
else {
    result = "Fail";
}

document.getElementById("results").innerHTML =
"Total marks:  " + total + "<br>" +
"Average:  " + average.toFixed(2) + "<br>" +
"Grade:  " + grade + "<br>" +
"Result:  " + result;
}
