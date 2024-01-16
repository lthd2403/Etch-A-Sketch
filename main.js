let color = "black";
let mouseDown = false;

document.addEventListener('DOMContentLoaded', function() {
    const divGrid = document.querySelector("#divGrid");
    
    /* Default grid */
    const defaultGrid = 16;
    divGrid.style.setProperty("--column", defaultGrid);
    divGrid.style.setProperty("--row", defaultGrid);

    // Add mousedown and mouseup event listeners to the document
    document.addEventListener("mousedown", () => {
        mouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    for (let i = 0; i < defaultGrid * defaultGrid; i++) {
        let div = document.createElement("div");

        // Add mousemove and click event listeners to each grid element
        div.addEventListener("mousemove", () => {
            if (mouseDown) {
                colorSquare.call(div); // Use call to set 'this' to the div element
            }
        });

        div.addEventListener("click", colorSquare);
        div.style.cssText = "background-color: white; border: 1px solid grey;"
        divGrid.appendChild(div);
    };

    /* Take user number input to create a new grid */
    const numberInput = document.querySelector("#gridSize");
    const gridText = document.querySelector("#Num");
    numberInput.addEventListener("input", () => {
        let gridSize = numberInput.value;
        divGrid.style.setProperty("--column", gridSize);
        divGrid.style.setProperty("--row", gridSize);

        divGrid.innerHTML = "";

        /* Add divs to the div container based on the size user wants */
        for (let i = 0; i < gridSize * gridSize; i++) {
            let div = document.createElement("div");
            div.addEventListener("mousemove", () => {
                if (mouseDown) {
                    colorSquare.call(div);
                }
            });
            div.addEventListener("click", colorSquare);
            div.style.cssText = "background-color: white; border: 1px solid grey;"
            divGrid.appendChild(div);
        };
    });

    /* Get input to show grid size for the user */
    const gridSizeText = () => {
        const sizeText = numberInput.value;
        gridText.textContent = `Grid size: ${sizeText}x${sizeText}`;
    };

    numberInput.addEventListener("input", gridSizeText);
});

/* Color mode */
function changeColor(choice) {
    color = choice;
}

/* Color square function */
function colorSquare() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}