
//hamburger menu
const hamburger = document.querySelector(".fas")
let number = 0;
hamburger.addEventListener("click", function () {

    if( number === 0){
        console.log("dupa")
        this.firstElementChild.style.display = "block";
        number++;
    }else{
        this.firstElementChild.style.display = "none";
        number--;
    }
})

export