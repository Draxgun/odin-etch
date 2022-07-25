console.log("Hello world")


let mainContainer = document.querySelector(".mainContainer");
let mainGrid = document.querySelector(".mainGrid")

/*Function that creates grid */
let createGrid = (n) => {
    for(let i=1; i=n;i++) {
        let grid = document.createElement('div');
        grid.className = "grid";
        grid.setAttribute('id', `grid${i}` );
        mainGrid.appendChild(grid);
    }
}

createGrid(20)