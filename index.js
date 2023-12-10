function startGame() {
  let high = 10;
  let low = 1;
  let correct_ans = Math.floor(Math.random() * high) + low;
  let attempts = 3;
  let result = false;

  for (let i = 0; i < attempts; i++) {
    let promptMessage = "Enter your guess: ";
    let guess = prompt(`${promptMessage}`);

    if (guess == correct_ans) {
      result = true;
      break;
    } else if (guess > correct_ans) {
      promptMessage = "Correct answer is smaller!, guess again:";
    } else {
      promptMessage = "Correct answer is greater!, guess again:";
    }
  }

  message.textContent = result ? "You win!" : "You lose!";
}
