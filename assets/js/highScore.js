
function retriveHighScores() {
    let highscores =
        JSON.parse(
            window.localStorage.getItem(
                "highscores"
            )
        ) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    highscores.forEach(function (
        score
    ) {
        let liTag =
            document.createElement(
                "li"
            );
        liTag.textContent =
            score.name +
            " - " +
            score.score;
        let olEl =
            document.getElementById(
                "highscores"
            );
        olEl.appendChild(liTag);
    });
}

// Clear previous scores 
function updateHighScores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
};

document.getElementById('clear').addEventListener('click', updateHighScores);;

retriveHighScores();

