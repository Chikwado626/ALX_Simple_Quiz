function checkAnswer() {
    let correctAnswer = "4"

    let userAnswer = document.querySelector("input[name=quiz]:checked").value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct, well done";
    } else {
        document.getElementById("feedback").textContent = "incorrect, try again";
    }
}
document.getElementById("submit-answer").addEventlistener("click", checkAnswer);