var a = document.getElementsByClassName("botLateral")[0]

var b = document.getElementsByClassName("botLateral")[1]

var c = document.getElementsByClassName("botLateral")[2]


document.getElementsByClassName("botLateral")[0].addEventListener("click",function(event1){
    a.style = "background-color: rgb(170, 175, 180);"
    b.style = "background-color: rgb(222, 228, 235);"
    c.style = "background-color: rgb(222, 228, 235);"
})

document.getElementsByClassName("botLateral")[1].addEventListener("click",function(event1){
    b.style = "background-color: rgb(170, 175, 180);"
    a.style = "background-color: rgb(222, 228, 235);"
    c.style = "background-color: rgb(222, 228, 235);"
})

document.getElementsByClassName("botLateral")[2].addEventListener("click",function(event1){
    c.style = "background-color: rgb(170, 175, 180);"
    a.style = "background-color: rgb(222, 228, 235);"
    b.style = "background-color: rgb(222, 228, 235);"
})