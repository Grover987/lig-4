function verifyWinner(player){

	if(player === players[0]){
	
		win(winArrH,playerOneArr);
		win(winArrV,playerOneArr);
		win(winArrD1,playerOneArr)
		win(winArrD2,playerOneArr)

	}else{
		win(winArrH,playerTwoArr);
		win(winArrV,playerTwoArr);
		win(winArrD1,playerTwoArr)
		win(winArrD2,playerTwoArr)
	}

}

function win(arrPossibility,arrPlayer){
	
	let countToWin = 0;
	for(let i = 0 ; i < arrPossibility.length;i++){
		countToWin = 0
		for(let c = 0 ; c < 4 ; c++){
			if(arrPlayer.includes(arrPossibility[i][c])){
				countToWin++;	
			}		
		}
		if(countToWin===4){
			countToWin = 0
			//colocar função que mostrara a tela de vitoria
			return alert('you won')
		}
		
	}
	
}

