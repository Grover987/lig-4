function verifyWinner(player){

	if(player === players[0]){
	
		win(winArrH,playerOneArr);
		win(winArrV,playerOneArr);


	}else{
		win(winArrH,playerTwoArr);
		win(winArrV,playerTwoArr);
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
			return alert('you won')
		}
		
	}
	
}

