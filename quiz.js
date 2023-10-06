function checkAnswers() {
    let score = 0;

    // Check answers
    if (document.getElementById("question1").value === "16") {
        score++;
    }
    if (document.getElementById("question2").value === "Computer Science") {
        score++;
    }
    if (document.getElementById("question3").value === "Plane Spotting") {
        score++;
    }

    // Display result
    let resultDiv = document.getElementById("quizResult");
    if (score === 3) {
        resultDiv.innerHTML = "<span class='text-success'>Congratulations! You got all answers right!</span>";
    } else {
        resultDiv.innerHTML = "<span class='text-danger'>You got " + score + "/3 answers right. Try again!</span>";
    }
}
