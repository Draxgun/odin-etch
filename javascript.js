
let mainGrid = document.querySelector(".mainGrid");

/*Grid Slider */
let gridSlider = document.getElementById("gridSlider")
let gridSliderValue = gridSlider.value;




let gridSizeText = document.getElementById("gridSizeText");
gridSizeText.textContent = `The size of the grid is ${gridSliderValue} x ${gridSliderValue} `;

gridSlider.addEventListener('change',(event) =>{
  gridSliderValue = gridSlider.value;
  gridSizeText.textContent = `The size of the grid is: ${ gridSliderValue} x ${ gridSliderValue} `;
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

/* Colorfill background and functions */
let colorPickerBackground = document.getElementById("colorBackgroundPicker")
let fillColorBackground  = colorPickerBackground.value;
console.log(fillColorBackground)

/* testing */
colorPickerBackground.addEventListener('change', (event) => {
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
      
      if(grid.getAttribute('clicked')!='1'){
        fillColorBackground  = colorPickerBackground.value;  
        grid.setAttribute('style', `background-color: ${fillColorBackground};`);
      }
     
    });  
});


/*Grid reset button */
let resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click' , () => {
  resetGrid();
  createGrid(gridSliderValue);
})

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
  createClickEvents();
}

/*ResetGrid*/
let resetGrid = () =>{
  mainGrid.replaceChildren();
}

/* Makes me get all elements */    
let createClickEvents = () => { 
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    grid.addEventListener('click', function() {
      grid.setAttribute('clicked','1');
      grid.setAttribute('style', `background-color: ${fillColor};`)
    });
      
    grid.addEventListener('dblclick', function() {
      grid.setAttribute('clicked','0');
      grid.setAttribute('style', `background-color: ${fillColorBackground};`);
    }
    );

  });
};







