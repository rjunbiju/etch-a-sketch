let changeSquareButton = document.querySelector('button');
let squareSides;
let sideNumber;
changeSquareButton.addEventListener("click", promptScript);

function promptScript(){
let sketchHolder = document.getElementById("sketchContainer");
sketchHolder.textContent = '';
squareSides = prompt("Enter how many squares one side of the grid should be");

while(true){
    if (squareSides <= 100){
        sideNumber = squareSides;
        break;
    }
    squareSides = prompt("That is too high. Enter a value of 100 or less");
}


for (let i = 0 ; i< (sideNumber**2) ; i++ ){
    let square = document.createElement('div');
    square.setAttribute('id', 'sketchSquare');
    sketchHolder.appendChild(square);
}

document.querySelectorAll("#sketchSquare").forEach(function(element) {
    element.style.width = (400/sideNumber) + "px";
    element.style.height = (400/sideNumber) + "px";

    element.addEventListener("mouseover", change_color);

    function change_color(){
        element.style.backgroundColor = "black";
        
    }
});


}





