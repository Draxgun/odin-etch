
let n = 100;

let mainContainer = document.querySelector(".mainContainer");

let mainGrid = document.querySelector(".mainGrid");
mainGrid.style.gridTemplateColumns = `repeat(${n},1fr)`

/*Function that creates grid */
let createGrid = (n) => {
    for(let i=1; i<=n*n;i++) {        
        let grid = document.createElement('div');
        grid.classList.add("grid");
        grid.setAttribute('id', `grid${i}` );
        mainGrid.appendChild(grid);
    }
}

createGrid(n);

/* Makes me get all elements */    
const grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
  grid.addEventListener('click', function() {
    grid.setAttribute('style', 'background-color: yellow;');
  });
});






