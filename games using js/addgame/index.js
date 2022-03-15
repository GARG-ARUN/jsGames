var parentt = document.querySelector(".blocks");

var addBlockIndex = { x: 1, y: 1 };

var element = "";
var motion = "";
var move = function () {
    motion =
        setInterval(() => {
            addBlockIndex.y += 1;
            element.style.gridColumn = addBlockIndex.x + "/" + (addBlockIndex.x + 1);
            element.style.gridRow = addBlockIndex.y + "/" + (addBlockIndex.y + 1);
            btwStop();
            if (addBlockIndex.y === 8) {
                stop();
            }
        }, 1000);
}


var stop = function () {
    clearInterval(motion);
    addBlockIndex.y = 0;
    addBlockIndex.x = 0;
    createBlock();
}


function createBlock() {
    element = document.createElement("div");
    element.style.gridColumn = addBlockIndex.x + "/" + (addBlockIndex.x + 1);
    element.style.gridRow = addBlockIndex.y + "/" + (addBlockIndex.y + 1);
    element.classList.add("block");
    parentt.appendChild(element);
    move();

}
createBlock();


var btwStop = function () {
    var allBlocks = document.querySelectorAll(".block");
    var length = allBlocks.length;
    for (let i = 0; i < length - 1; i++) {
        if (allBlocks[length - 1].style.gridRow === allBlocks[i].style.gridRow && allBlocks[length - 1].style.gridColumn === allBlocks[i].style.gridColumn) {
            stop();
            var su = allBlocks[length - 1].style.gridRow;
            var fir = su[0];
            allBlocks[length - 1].style.gridRow = parseInt(fir) - 1 + "/" + fir;
        }
    }
}

window.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "ArrowRight") {
        addBlockIndex.x += 1;
        addBlockIndex.y = addBlockIndex.y - 1;
    }
    if (e.key === "ArrowLeft") {
        let allBlocks = document.querySelectorAll(".block");
        let length = allBlocks.length;
        for (let i = 0; i < length - 1; i++){
             if (allBlocks[length - 1].style.gridRow === allBlocks[i].style.gridRow && allBlocks[length - 1].style.gridColumn === allBlocks[i].style.gridColumn) {
                 console.log("cant go this direction")
             }
        }
        if(addBlockIndex.x==1){
            console.log("no-effect");
        }
        else {
            addBlockIndex.x -= 1;
            addBlockIndex.y = addBlockIndex.y - 1;
        }
        
    }
})

