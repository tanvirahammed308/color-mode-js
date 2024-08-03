const body=document.querySelector("body")
const buttons=document.querySelectorAll(".button")

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        e.preventDefault()
        console.log(e.target)
        if(e.target.id === "white"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "black"){
            body.style.backgroundColor=e.target.id

        }

    })
})