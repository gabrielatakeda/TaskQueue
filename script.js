let boards = []


document.getElementById("botaoCriar").addEventListener("click", function aparecer(evento){
    let divBoardForm  = document.getElementById("formNewBoard");

    if(divBoardForm.classList.contains("hide")){
        divBoardForm.classList.remove("hide");
        divBoardForm.classList.add("formNewBoard")
    }else{
        divBoardForm.classList.remove("formNewBoard")
        divBoardForm.classList.add("hide")
    }

})

const form = document.querySelector("form");
var cont = 0


form.addEventListener(
    "submit",
    (event) => {
        const data = new FormData(form);
        let output = "";
        for (const entry of data) {
            output = `${entry[1]}\r`;
        }
    event.preventDefault();

    let board = document.createElement("div")
    board.classList.add("Quadrado")
    
    board.id = "quadrado"+cont

    console.log(board.id)

    var teste = document.getElementById("teste")

    var filho = document.getElementById("filho")

    teste.insertBefore(board, filho)

    var selectedBoard = document.getElementById("quadrado"+cont)
    
    selectedBoard.style.backgroundColor = output
    selectedBoard.innerHTML = output

    cont++

    


    }

)