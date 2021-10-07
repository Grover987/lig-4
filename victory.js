function verifyWinner(player){

	if(player === players[0]){
	
		win(winArrH,playerOneArr,player);
		win(winArrV,playerOneArr,player);
		win(winArrD1,playerOneArr,player)
		win(winArrD2,playerOneArr,player)

	}else{
		win(winArrH,playerTwoArr,player);
		win(winArrV,playerTwoArr,player);
		win(winArrD1,playerTwoArr,player)
		win(winArrD2,playerTwoArr,player)
		
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
			setTimeout(function(){gameBox.remove()}, 1000)
			
	
			return 
		}
		
	}
	
}


let button = document.createElement('button');
let node = document.createTextNode('Reset');
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
	catPopUp.remove()
	dogPopUp.remove()
	img.remove()
	imge.remove()
	button.remove()
	
	menu.style.display = 'flex'
	 
})   

}



