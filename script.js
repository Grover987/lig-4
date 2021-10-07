const body = document.getElementsByTagName('body')[0]
const gameBox = document.createElement('div')
gameBox.setAttribute('id', 'gameBox')

const menu = document.querySelector('.menu')
let menuTrack = menu

const cat = document.getElementById('imgCat')
const dog = document.getElementById('imgDog')

let num = 1
let players = []
let count = 0
let playerOneArr = []
let playerTwoArr = []
let actualPlayer

function createTable(playerTarget) {
  menu.style.display = 'none'
  actualPlayer = playerTarget

  for (let i = 1; i <= 7; i++) {
    let tableSection = document.createElement('section')
    tableSection.classList.add(i)
    gameBox.appendChild(tableSection)

    for (let j = 0; j < 6; j++) {
      let div = document.createElement('div')
      div.classList.add('divCell')
      div.setAttribute('data-square', num)
      num++
      tableSection.appendChild(div)
    }
  }
  body.appendChild(gameBox)
  const columns = document.querySelectorAll('section')
  addDiscs(columns, actualPlayer)
}

let playerOne = document.createElement('img')
playerOne.setAttribute('id', 'imgCat')
let playerTwo = document.createElement('img')
playerTwo.setAttribute('id', 'imgCat')

cat.addEventListener('click', function (evt) {
  createTable(evt.target)
})
dog.addEventListener('click', function (evt) {
  createTable(evt.target)
})




function addDiscs(columns, actualPlayer) {
  
  columns.forEach(section =>
    section.addEventListener('click', function cell (evt) {
      let columnChild = evt.currentTarget.childNodes
      for (let i = 0; i < 6; i++) {
        if (columnChild[i].childElementCount < 1) {
          playerOne = document.createElement('img')
          playerOne.setAttribute('class', 'catCells')
          playerOne.setAttribute('src', 'img/doge2.png')
          playerTwo = document.createElement('img')
          playerTwo.setAttribute('src', 'img/doge.png')
          playerTwo.setAttribute('class', 'dogCells')

          if (actualPlayer.getAttribute('id') === 'imgCat') {
            players[0] = playerOne
            players[1] = playerTwo
          } else {
            players[0] = playerTwo
            players[1] = playerOne
          }

          if (count === 0) {
            count = 1

            columnChild[i].appendChild(players[0])
          
            let playerOnePlay = players[0].parentElement.dataset
            for (let value in playerOnePlay) {
              let arrValue = playerOnePlay[value]
              playerOneArr.push(+arrValue)
              console.log(playerOneArr)
            }
            verifyWinner(players[0])
            checkDraw();
            return
          } else {
            count = 0

            columnChild[i].appendChild(players[1])
           
            let playerTwoPlay = players[1].parentElement.dataset
            for (let value in playerTwoPlay) {
              let arrValue = playerTwoPlay[value]
              playerTwoArr.push(+arrValue)
              console.log(playerTwoArr)
            }
            verifyWinner(players[1])
            checkDraw();
            return
          }
        }
      }
    })
  )
}

//VICTORY PARAMETERS Vertical
const winVert = [1, 2, 3, 4]
const winningV = []

for (let k = 0; k < 7; k++) {
  for (let i = 0; i < 3; i++) {
    winVert.forEach(function (value) {
      winningV.push(value + i)
    })
  }

  for (let i = 0; i < winVert.length; i++) {
    winVert[i] += 6
  }
}

const winArrV = []

for (let i = 0; i < 21; i++) {
  winArrV[i] = winningV.splice(0, 4)
}

//VICTORY PARAMETERS Horizontal

const winHorizon = [1, 7, 13, 19]
const winningH = []

for (let k = 0; k < 4; k++) {
  for (let i = 0; i < 6; i++) {
    winHorizon.forEach(function (valor) {
      winningH.push(valor + i)
    })
  }

  for (let i = 0; i < winHorizon.length; i++) {
    winHorizon[i] += 6
  }
}

const winArrH = []

for (let i = 0; i < 24; i++) {
  winArrH[i] = winningH.splice(0, 4)
}

//DRAW CONDITION
let imgDraw = document.createElement('img');
function checkDraw() {
  if (playerOneArr.length === 21 && playerTwoArr.length === 21) {
  
    imgDraw.src = './img/vic5.jpeg'
    body.appendChild(imgDraw);
    reset()
    //substituir o console pela função que mostra a tela
    //Chamar a função ao final de cada jogada
  }
}


// PARAMETERS DIAGONAL L to R

const winDiagonal1 = [3, 10, 17, 24]
const winningD1 = []

for (let k = 0; k < 3; k++) {
  for (let i = 0; i < 4; i++) {
    winDiagonal1.forEach(function (valor) {
      winningD1.push(valor + 6 * i)
    })
  }

  for (let i = 0; i < 4; i++) {
    winDiagonal1[i] -= 1
  }
}

const winArrD1 = []

for (let i = 0; i < 12; i++) {
  winArrD1[i] = winningD1.splice(0, 4)
}

//PARAMETERS DIAGONAL R TO L

const winDiagonal2 = [4, 9, 14, 19]
const winningD2 = []

for (let k = 0; k < 3; k++) {
  for (let i = 0; i < 4; i++) {
    winDiagonal2.forEach(function (valor) {
      winningD2.push(valor + 6 * i)
    })
  }

  for (let i = 0; i < 4; i++) {
    winDiagonal2[i] += 1
  }
}

const winArrD2 = []

for (let i = 0; i < 12; i++) {
  winArrD2[i] = winningD2.splice(0, 4)
}

let dogPopUp = document.createElement('div');
let img = document.createElement('img');
function dogV () {


 dogPopUp.id = 'dogDiv'
 let node = document.createTextNode('Congratulation!! Team Doggo won!');
 img.src = '/img/vic.jpg';
 dogPopUp.appendChild(node);
 setTimeout(function(){body.appendChild(img), body.appendChild(dogPopUp)}, 1000)

 reset();

}

let catPopUp = document.createElement('div');
let imge = document.createElement('img');
function catV () {
 catPopUp.id = 'catDiv'
let node = document.createTextNode('Congratulation!! Team Cat won!');
 imge.src = '/img/vi2.jpeg';
 catPopUp.appendChild(node);
 setTimeout(function() { body.appendChild(imge) 
  body.appendChild(catPopUp)}, 1000)

 reset();

}
