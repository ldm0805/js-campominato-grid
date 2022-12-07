let level_diff
let button = document.getElementById('item-up');

button.addEventListener('click', function(){ 
    
let grid = document.getElementById('grid');

if(grid){
    grid.innerHTML = '' ;
}

grid_number = document.getElementById('level').value;

for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);

    currentSquare.addEventListener('click', function(){
        this.classList.toggle('clicked')
        console.log(`La casella cliccata è la numero: ${this.innerText}`)
    })
}


function createGridSquare(number){
    if(grid_number == 100){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square");
        currentElement.innerText = number;
        return currentElement;
    }
    else if(grid_number == 81){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square_med");
        currentElement.innerText = number;
        return currentElement;
    }
    else{
        const currentElement = document.createElement('div');
        currentElement.classList.add("square_min");
        currentElement.innerText = number;
        return currentElement;
    }
}
})
