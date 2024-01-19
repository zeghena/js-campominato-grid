// Recupero gli elementi HTML (container, bottone)
// genero la griglia



const gameBordElement = document.getElementById("game-board");
const playButton = document.getElementById("play");

// ### invoco la funzione

generateGrid(gameBordElement)



// #### creo la funzione

function generateGrid (container){
    console.log(container)
    for(i = 0; i < 100; i ++){

        const cellElement = generateCell();
        cellElement.innerHTML = i

        container.append(cellElement);


    }
}


function generateCell(){
    const cell = document.createElement("div");
    cell.classList.add("box");

    return cell;

    
}

const bombsNumbers = []


while(bombsNumbers.length < 16){
    let number = Math.floor((Math.random()* 100)+1);
    if(bombsNumbers.includes(number)){
        bombsNumbers.push(number);
    }

}

console.log(bombsNumbers)
