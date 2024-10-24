let boards = []


document.getElementById("botaoCriar").addEventListener("click", function criar(evento){
    let divBoardForm  = document.getElementById("formNewBoard");

    if(divBoardForm.classList.contains("hide")){
        divBoardForm.classList.remove("hide");
        divBoardForm.classList.add("formNewBoard")
    }else{
        divBoardForm.classList.remove("formNewBoard")
        divBoardForm.classList.add("hide")
    }



   /* let boardName = document.getElementById("inputBoard").value
    boards.push(boardName)
    console.log(boards);
    document.getElementById("inputBoard").value = ""*/
})