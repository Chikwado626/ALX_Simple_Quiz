function checkAnswer() {
    const correctAnswer= "4"

const userAnswer= document.querySelector('input{name="quiz"}:checked').value;

if (userAnswer===correctAnswer) {
    document.getElementById("feedback").textContent= "Correct! well done.";
}

}