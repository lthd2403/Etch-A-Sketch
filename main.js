let mouseDown = false;
let color = "black";
let penColor = "black";

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
        div.classList = "divChild";
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
            div.classList = "divChild";
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

    /* Set pen color to be input color*/
    const colorSelectInput = document.querySelector("#colorSelect");
    colorSelectInput.addEventListener("input", () => {
        changeColor(colorSelectInput.value);
        penColor = colorSelectInput.value;
    });

    const penColorButton = document.querySelector("#penColorButton");
    const rainbowButton = document.querySelector("#rainbowButton");
    const eraserButton = document.querySelector("#eraserButton");
    const clearButton = document.querySelector("#clearButton");

    penColorButton.addEventListener("click", () => changeColorButton('penColorButton'));
    rainbowButton.addEventListener("click", () => changeColorButton('rainbowButton'));
    eraserButton.addEventListener("click", () => changeColorButton('eraserButton'));
    clearButton.addEventListener("click", () => changeColorButton('clearButton'));
});

/* Set all the square grids to default color*/
function clearGrid() {
    const divChildren = document.querySelectorAll(".divChild");
    divChildren.forEach(div => div.style.backgroundColor = "white");
};

/* Color mode */
function changeColor(choice) {
    color = choice;
}

/* Set color for each square */
function colorSquare() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

/* chang background of a button when click it and remove when click to new button */
function changeColorButton(clickedButtonId) {
    const buttons = document.querySelectorAll(".colorButton");

    buttons.forEach(button => {
        if (button.id === clickedButtonId) {
            if (clickedButtonId === 'clearButton'){
                button.classList.add("activeButton");
                setTimeout(() => {
                    button.classList.remove("activeButton");
                    penColorButton.classList.add("activeButton");
                }, 1000);
            } else {
                button.classList.add("activeButton");
            }
        } else {
            button.classList.remove("activeButton");
        };
    });
};


