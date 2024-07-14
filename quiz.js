function checkAnswer() {
    let correctAnswer = "4"

    let userAnswer = document.querySelector("input[name=quiz]:checked").value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
};

let submitbutton = document.getElementById('submit-answer');
submitbutton.addEventlistener("click", checkAnswer);