//view
show();
function show(){
    document.getElementById("info").innerHTML = `
    <div class="info">Try to guess the hidden word below before it's too late! You can guess either one letter at a time or the whole word, but if you get the word wrong you lose 2 guesses!</div>
    <h2>"WARNING: This game may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised."</h2>
    <input type="text" placeholder="Guess">
    <button style="display:none;">Play Again</button>
    <div class="word"></div>
    <div class="hangman"></div>
    <span style="position:absolute;bottom:10px;left:10px;">
       <div class="guessesLeft">Guesses left: <span class="bold">10</span></div>
       <div class="guessed">Guessed letters: <span class="bold"></span></div>
    </span>
    <span style="position:absolute;bottom:10px;right:10px;text-align:right;">
       <div>Streak: <span class="streak bold">0</span></div>
       <div>Average score: <span class="score bold">-</span></div>
    </span>

    








    `;

}
