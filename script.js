const body = document.getElementsByTagName('body')[0];
const gameBox = document.getElementById('gameBox')
let trackPlayerOne= []
let trackPlayerTwo= []
let num = 1;


for(let i = 1; i <= 7; i++){
   
    let tableSection = document.createElement('section');
    tableSection.classList.add(i);
    gameBox.appendChild(tableSection);
    console.log(tableSection)

    for(let j = 0; j < 6; j++){
      
       let div = document.createElement('div');
       div.setAttribute('data-square',num);
       num++
        tableSection.appendChild(div);
       
    }
} 
const columns = document.querySelectorAll('section');

let playerOne = document.createElement('div');
playerOne.classList.add('playerOne');
let playerTwo = document.createElement('div');
playerTwo.classList.add('playerTwo');   

let players = []
let count = 0;
let playerOneArr = [];
let playerTwoArr = [];

for(let i = 0 ; i <6;i++){
    trackPlayerOne[i] = new Array(7)
    trackPlayerTwo[i] = new Array(7)
    
}

function addDiscs(evt){

  columns.forEach(section=>section.addEventListener('click',function(evt){
  
        let columnChild = evt.currentTarget.childNodes;
        for(let i = 0 ; i<6;i++){
            if(columnChild[i].childElementCount<1){

                playerOne = document.createElement('div');
                playerOne.classList.add('playerOne');
                playerTwo = document.createElement('div');
                playerTwo.classList.add('playerTwo');

                players[0] = playerOne;
                players[1] = playerTwo;

                let indexX = Number(columnChild[i].id)
                let indexY = Number(section.getAttribute('class'))

                if(count===0){
                   count=1;
                   trackPlayerOne[-indexX+5][indexY-1] = players[0]
                  console.log(trackPlayerOne)
                  columnChild[i].appendChild(players[0]);
                 
                  let playerOnePlay = players[0].parentElement.dataset;
                  for(let value in playerOnePlay){
                      let arrValue = playerOnePlay[value];
                      playerOneArr.push(arrValue)
                      console.log(playerOneArr)
                  }
                   return  
                    

                }else{
                   count = 0;
                   trackPlayerTwo[-indexX+5][indexY-1] = players[1]
                   console.log(trackPlayerTwo)
                   columnChild[i].appendChild(players[1]);

                   let playerTwoPlay = players[1].parentElement.dataset;
                   for( let value in playerTwoPlay){
                       let arrValue = playerTwoPlay[value];
                       playerTwoArr.push(arrValue);
                       console.log(playerTwoArr)
                   }
                   return 
                    
                }
            }
       }  
     
}))
}
addDiscs();



function victoryDiagonal(){
    
}
