const body = document.getElementsByTagName('body')[0]
const gameBox = document.getElementById('gameBox')
let num = 1

for (let i = 1; i <= 7; i++) {
  let tableSection = document.createElement('section')
  tableSection.classList.add(i)
  gameBox.appendChild(tableSection)
  console.log(tableSection)

  for (let j = 0; j < 6; j++) {
    let div = document.createElement('div')
    div.setAttribute('data-square', num)
    num++
    tableSection.appendChild(div)
  }
}
const columns = document.querySelectorAll('section')

let playerOne = document.createElement('div')
playerOne.classList.add('playerOne')
let playerTwo = document.createElement('div')
playerTwo.classList.add('playerTwo')

let players = []
let count = 0
let playerOneArr = []
let playerTwoArr = []



function addDiscs(evt) {
  columns.forEach(section =>
    section.addEventListener('click', function (evt) {
      let columnChild = evt.currentTarget.childNodes
      for (let i = 0; i < 6; i++) {
        if (columnChild[i].childElementCount < 1) {
          playerOne = document.createElement('div')
          playerOne.classList.add('playerOne')
          playerTwo = document.createElement('div')
          playerTwo.classList.add('playerTwo')

          players[0] = playerOne
          players[1] = playerTwo

         

          if (count === 0) {
            count = 1
            
           
            columnChild[i].appendChild(players[0])

            let playerOnePlay = players[0].parentElement.dataset
            for (let value in playerOnePlay) {
              let arrValue = playerOnePlay[value]
              playerOneArr.push(arrValue)
              console.log(playerOneArr)
            }
            return
          } else {
            count = 0
           
            columnChild[i].appendChild(players[1])

            let playerTwoPlay = players[1].parentElement.dataset
            for (let value in playerTwoPlay) {
              let arrValue = playerTwoPlay[value]
              playerTwoArr.push(arrValue)
              console.log(playerTwoArr)
            }
            return
          }
        }
      }
    })
  )
}
addDiscs()

//VICTORY PARAMETERS Vertical
const winVert = [1, 2, 3, 4]
const winningV = []

function winConVertical(valor) {
  for (i = 0; i <= 3; i++) {
    winningV.push(valor + i)
  }
  winningV.push('-')
}

function createParameters() {
  for (let i = 0; i < 6; i++) {
    winVert.forEach(winConVertical)
    for (let j = 0; j < winVert.length; j++) {
      winVert[j] += 7
    }
  }
}
createParameters()
winningV.pop()
let winS = winningV.join(' ')
let winArrVert = winS.split(' - ')

//VICTORY PARAMETERS Horizontal

const winHorizon = [1, 7, 13, 19]
const winningH = []

for (let k = 0; k < 4; k++) {
  for (let i = 0; i < 6; i++) {
    winHorizon.forEach(function winConHorizontal(valor) {
      winningH.push(valor + i)
    })
    winningH.push('-')
  }

  for (let i = 0; i < winHorizon.length; i++) {
    winHorizon[i] += 6
  }
}

winningH.pop()
let winSH = winningH.join(' ')
let winArrHoriz = winSH.split(' - ')
