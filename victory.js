function verifyWinner(player){

let arrPossibilies = [winArrH,winArrV,winArrD1,winArrD2]
	if(player === players[0]){

		arrPossibilies.forEach(arr=>win(arr,playerOneArr,player))

	}else{
		arrPossibilies.forEach(arr=>win(arr,playerTwoArr,player))
		
	}

}

function win(arrPossibility,arrPlayer,playercell){
	
	let countToWin = 0;
	for(let i = 0 ; i < arrPossibility.length;i++){
		countToWin = 0
		for(let c = 0 ; c < 4 ; c++){
			if(arrPlayer.includes(arrPossibility[i][c])){
				countToWin++;	
			}		
			
		}
		if(countToWin===4){
			
			gameBox.style.pointerEvents = 'none'
			playercell = (playercell.classList.value === 'catCells') ?   catV() : dogV();
			playerOneArr = [];
			playerTwoArr = [];
			countToWin = 0
			//colocar função que mostrara a tela de vitoria
			setTimeout(function(){gameBox.remove()}, 800)
			const audioWin = document.createElement('audio')
			audioWin.setAttribute('src','audio/horse.wav')
			audioWin.volume == 0.4;
			audioWin.play();
			buttonMusic.remove()
			return 
		}
		
	}
	
}


let button = document.createElement('button');
let node = document.createTextNode('Reset');
button.id = 'reset'

function reset() {
	
   setTimeout(function() {button.appendChild(node), body.appendChild(button)}, 1000);
   count = 0;
   button.addEventListener('click', function() {
	console.log(gameBox.childNodes)
	gameBox.innerHTML= '';
	num = 1;
	gameBox.style.pointerEvents = 'initial'
	catPopUp.innerText = ''
	dogPopUp.innerText = ''
	drawDiv.innerText = ''
	drawDiv.remove()
	catPopUp.remove()
	dogPopUp.remove()
	imgDraw.remove()
	img.remove()
	imge.remove()
	button.remove()
	
	
	body.appendChild(buttonTrack[0])
	menu.style.display = 'flex'
	 
})   

}



