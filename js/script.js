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

function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


for(let i = 0; i<100; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);
    currentSquare.addEventListener('click', function(){
        this.classList.add('clicked');
    })
}
})