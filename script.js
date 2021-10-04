const body = document.getElementsByTagName('body')[0];
const gameBox = document.getElementById('gameBox')

let num = 1;

for(let i = 1; i <= 6; i++){

    let tableSection = document.createElement('section');
    tableSection.classList.add(i);
    gameBox.appendChild(tableSection);
    console.log(tableSection)

    for(let j = 0; j < 7; j++){

       let div = document.createElement('div');
       div.id = num;
        tableSection.appendChild(div);
        num++
    }
}
