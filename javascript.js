

let n =10


/*Grid Slider */
let gridSlider = document.getElementById("gridSlider")
let gridSliderValue = gridSlider.value;

let gridSizeText = document.getElementById("gridSizeText");
gridSizeText.textContent = `The size of the grid is ${gridSliderValue} x ${gridSliderValue} `;

gridSlider.addEventListener('change',(event) =>{
  gridSliderValue = gridSlider.value;
  gridSizeText.textContent = `The size of the grid is ${ gridSliderValue} x ${ gridSliderValue} `;
  console.log(gridSliderValue)
  createGrid(gridSliderValue);
})


/* ColorFill commands and fucntions */
let colorPicker = document.getElementById("colorPicker")
let fillColor  = colorPicker.value;

colorPicker.addEventListener('change', (event) => {
  fillColor  = colorPicker.value;
  console.log(fillColor)
});





let mainGrid = document.querySelector(".mainGrid");
mainGrid.style.gridTemplateColumns = `repeat(${n},1fr)`

/*Function that creates grid */
let createGrid = (n) => {
  resetGrid();  
  for(let i=1; i<=n*n;i++) {        
        let grid = document.createElement('div');
        grid.classList.add("grid");
        grid.setAttribute('id', `grid${i}` );
        mainGrid.appendChild(grid);
        mainGrid.style.gridTemplateColumns = `repeat(${n},1fr)`
    }
}

/*ResetGrid*/

let resetGrid = () =>{
  mainGrid.replaceChildren();
}

/* Makes me get all elements */    
const grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
  grid.addEventListener('click', function() {
    grid.setAttribute('style', `background-color: ${fillColor};`);
  });
});






