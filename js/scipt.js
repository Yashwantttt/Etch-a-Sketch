// row value
const rows = document.querySelector(".userRow");
// column value
const columns = document.querySelector(".userCol");


//container
const divContainer = document.getElementById("container")

//create btn event listener
const btn = document.querySelector(".btn");
btn.addEventListener("click",Clicker);

function Clicker(){
    const rowValue = rows.value;
    const colValue = columns.value
    gridmaker(rowValue,colValue)

    // const newdiv = document.createElement("div");
    // newdiv.classList.add("pixels")
    // divContainer.append(newdiv);
}


function gridmaker(x,y){
    let tbl = document.getElementById("container")
    
    const newdiv = document.createElement("div");
    newdiv.classList.add("boxx")
    newdiv.setAttribute('id',"boxx")
    tbl.append(newdiv);

    for (i=0;i<x;i++){
        let myrow = document.createElement("tr")
        myrow.classList.add("pixels")
        myrow.id = "row" + i 

        newdiv.appendChild(myrow);
        let roww = document.getElementById("row"+i)
        for (j=0;j<y;j++){
            let mycell = document.createElement("td")
            mycell.classList.add("pixels")
            mycell.setAttribute('id',"pix")
            roww.appendChild(mycell)

            // Color changer
            mycell.addEventListener("mouseover",draw)
            function draw(){
                mycell.style.backgroundColor = "rgb(255 0 0 / 70%)"
            }

        }

    }
}


const clearer = document.getElementById("clear")
clearer.addEventListener("click",gridRemover)

function gridRemover(){
    let grid = document.getElementById("boxx")
    const parent = grid.parentNode
    parent.removeChild(grid)
}




// let boxy = document.getElementById("pix")
// boxy.addEventListener("click",draw())
// function draw(){
//     let boxy = document.getElementById("pix")
//     boxy.style.backgroundColor= "red"
//     console.log()
    
// }
