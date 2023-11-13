var kartyak = document.querySelectorAll(".kartya")
renderBoard();

kartyak.forEach(function(div) {
    div.addEventListener('click', function(event) {
        changeColor(event.currentTarget);
        renderBoard();
      });
});

function changeColor(div){
    let currentColor = div.dataset.color;
    if(currentColor == "yellow"){
        div.dataset.color = "red"
    }else if(currentColor == "red"){
        div.dataset.color = "blue"
    }else {
        div.dataset.color = "yellow"
    }
}

function renderBoard() {
    kartyak.forEach(function(kartya) {
        let color  = kartya.dataset.color;
        kartya.style.backgroundColor = color;
    });
}