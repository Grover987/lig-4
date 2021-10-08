const buttonMusic = document.getElementById('btnMusic')

function turnMusic(){
	if(backgroundAudio.paused){
		backgroundAudio.play()
		buttonMusic.style.border = '3px outset green'
	}else{
		backgroundAudio.pause()
		buttonMusic.style.border = '3px outset red'
		backgroundAudio.currentTime = 0
	}
}
buttonMusic.addEventListener('click',turnMusic)