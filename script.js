const body = document.getElementsByTagName('body')[0]
const gameBox = document.getElementById('gameBox')
let trackPlayerOne = []
let trackPlayerTwo = []
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

for (let i = 0; i < 6; i++) {
  trackPlayerOne[i] = new Array(7)
  trackPlayerTwo[i] = new Array(7)
}

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

          let indexX = Number(columnChild[i].id)
          let indexY = Number(section.getAttribute('class'))

          if (count === 0) {
            count = 1
            trackPlayerOne[-indexX + 5][indexY - 1] = players[0]
            console.log(trackPlayerOne)
            return columnChild[i].appendChild(players[0])
          } else {
            count = 0
            trackPlayerTwo[-indexX + 5][indexY - 1] = players[1]
            console.log(trackPlayerTwo)
            return columnChild[i].appendChild(players[1])
          }
        }
      }
    })
  )
}
addDiscs()

function victoryDiagonal() {}

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

winningV.pop()
let winSH = winningH.join(' ')
let winArrHoriz = winSH.split(' - ')
