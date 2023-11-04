function gradeCheck(event) {
    event.preventDefault();
    let gradeInput = document.querySelector("#gradeInput").value;
    gradeInput = Number(gradeInput);

    console.log(gradeInput);

    let message = "";

    if (gradeInput >= 80) {
        message = "Excellent A++";
    } else if (gradeInput >= 70) {
        message = "Grade A Very good";
    } else if (gradeInput >= 60) {
        message = "Grade B Keep it up";
    } else if (gradeInput >= 50) {
        message = "Grade C Work Hard";
    } else if (gradeInput >= 40) {
        message = "Grade D";
    } else {
        message = "You are Fail";
    }

    document.querySelector("#resultWindow").innerHTML = message;
}

// Add an event listener to the button with the "id" of "checkButton".
document.querySelector("#checkButton").addEventListener("click", gradeCheck);
