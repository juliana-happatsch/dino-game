/** INSTRUCTIONS **/
window.onload = () => {
	const message = confirm('Do you want to learn how to play?');
	if (message) {
		alert('Press space or click on the page to jump and DONT hit the cactus!');
	}
	alert('Good game!');
}

/** VARIABLES **/
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreArea = document.getElementById('score');
const highscoreArea = document.getElementById('highscore');
let score = 0;
let highscore = 0;

/** JUMPING **/
document.body.onkeyup = (tecla) => {
	if (tecla.keyCode === 32) {
		dino.classList.add('animate');
		setTimeout(() => {
			dino.classList.remove('animate');
		}, 450);
	}
}

document.body.onclick = () => {
	dino.classList.add('animate');
	setTimeout(() => {
		dino.classList.remove('animate');
	}, 450);
}

/** DEATH **/
const checkDeath = setInterval(() => {
	const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
	const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

	if (cactusLeft > 0 && cactusLeft < 48 && dinoTop >= 202) {
		cactus.style.animation = 'none';
		alert('You lose :(');

		score = 0;
		cactus.style.animation = 'cactus 1.5s infinite linear';
	} else {
		score++;
		scoreArea.innerHTML = Math.floor(score / 150);
		
		if (highscore < score) {
			highscore = score;
		}
		highscoreArea.innerHTML = Math.floor(highscore / 150);
	}
}, 10);