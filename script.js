const introText = document.getElementById('intro-text');
const gameOptions = document.querySelector('.game-options');
const whoAreYouText = document.getElementById('who-are-you');
const myelinBtn = document.getElementById('myelin-btn');
const charlieBtn = document.getElementById('charlie-btn');
const mitchelBtn = document.getElementById('mitchel-btn');
const judeBtn = document.getElementById('jude-btn');

setTimeout(() => {
	introText.classList.add('intro-disappear');
}, 3000);

setTimeout(() => {
	introText.style.display = 'none';
	gameOptions.style.display = 'block';
}, 4000);

myelinBtn.addEventListener('click', () => {
	whoAreYouText.style.display = 'none';
	myelinBtn.innerHTML = 'Myelin (selected)';
	charlieBtn.disabled = true;
	mitchelBtn.disabled = true;
	judeBtn.disabled = true;
});

charlieBtn.addEventListener('click', () => {
	whoAreYouText.style.display = 'none';
	charlieBtn.innerHTML = 'Charlie (selected)';
	myelinBtn.disabled = true;
	mitchelBtn.disabled = true;
	judeBtn.disabled = true;
});

mitchelBtn.addEventListener('click',
