document.getElementById('Guess').onclick = function guess() {
    let userInput = window.prompt("Guess a number between 1 and 10", ""); // abre a buceta da janela!!!! 
    let max = 2;
    let randomNum = Math.floor(Math.random() * Math.floor(max) + 1);
    let attempts = 1;
        if (attempts < 2) {
            if (userInput == randomNum) {
                return window.alert("boa!!!!");
            } else if (userInput != randomNum) {
                attempts++;
                window.prompt("Try Again");
            } else {
                return window.alert("sorry!!!!");
            }
        }
}