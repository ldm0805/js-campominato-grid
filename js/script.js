let level_diff
let button = document.getElementById('item-up')

button.addEventListener('click', function(){
    
    
let grid = document.getElementById('grid');

if(grid){
    grid.innerHTML = '' ;
}

function createGridSquare(number){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.innerText = number;
    return currentElement;
}

level_diff = document.getElementById('level').value;


if (level_diff == 1){
    grid_number = 100;


}

else if (level_diff == 2){
    grid_number = 81;
}

else{
    grid_number = 49;
}

for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);
    currentSquare.addEventListener('click', function(){
        this.classList.add('clicked')
        console.log(`Hai cliccato il numero ${i + 1}`)

    })
}
})
