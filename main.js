document.addEventListener("DOMContentLoaded", () =>{
    const divGrid = document.querySelector("#divGrid");
    /* Default grid */
    const defaultGrid = 16;
    divGrid.style.setProperty("--column", defaultGrid);
    divGrid.style.setProperty("--row", defaultGrid);
    for (let i = 0; i < defaultGrid*defaultGrid; i++) {
        let div = document.createElement("div");
        div.classList = "colorChange";
        div.style.cssText = "background-color: white; border: 1px solid grey;"
        divGrid.appendChild(div);
    };

    /* Take user number input to create new grid */
    const numberInput = document.querySelector("#gridSize");
    const gridText = document.querySelector("#Num");
    numberInput.addEventListener("input", () =>{
        let gridSize = numberInput.value;
        divGrid.style.setProperty("--column", gridSize);
        divGrid.style.setProperty("--row", gridSize);

        divGrid.innerHTML = "";

        /* Add divs to the div container to based on the size user want */
        for (let i = 0; i < gridSize*gridSize; i++) {
            let div = document.createElement("div");
            div.classList = "colorChange";
            div.style.cssText = "background-color: white; border: 1px solid grey;"
            divGrid.appendChild(div);
        };
    });
    
    /* Get input to show grid size for user */
    const gridSizeText = () => {
        const sizeText = numberInput.value;
        gridText.textContent = `Grid size: ${sizeText}x${sizeText}`;
    };
    
    numberInput.addEventListener("input", gridSizeText);
    
});