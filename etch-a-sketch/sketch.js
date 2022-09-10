const grid = document.querySelector(".grid");


function createGrid(size = 16) {
    for (let rowNumber = 1; rowNumber <= size; rowNumber++) {
        const row = document.createElement('div');
        row.classList.add('box');
        grid.appendChild(row);
        for (let boxNumber = 1; boxNumber <= size ; boxNumber++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.classList.add('select');
            row.appendChild(box);
        }
    }
}
createGrid();


function changeColor(e) {
    if (e.type=="mousedown") {
        console.log(e.type);
        e.target.addEventListener('mouseover', (e) =>{
            e.target.backgroundcolor = 'black';
        });
    } 
}


function fillColor() {
    const boxes = document.querySelectorAll('.select');
    boxes.forEach((box) => {
        box.addEventListener('mousedown', changeColor);

    });
}

fillColor();
