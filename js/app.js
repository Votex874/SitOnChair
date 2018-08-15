import {userDecision} from "./partials/calculator"
const user = new userDecision();
user.userMenu();

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
//dropdown
const dropDown = document.querySelector("nav > ul").firstElementChild

dropDown.addEventListener("mouseover" , function()  {
    this.style.paddingBottom = "40px"
    this.firstElementChild.classList.add("dropDown");
})
dropDown.addEventListener("mouseout" , function()  {
    this.firstElementChild.classList.remove("dropDown");
})

//znikanie opisu na zdj sekcja2

const imgContainer = [...document.querySelectorAll(".imgContainer")];

imgContainer.forEach( e => {
    e.addEventListener("mouseover", function () {
        const children = [...this.children]
        children.forEach( e =>{
            e.style.display = "none"
        })
    })
    e.addEventListener("mouseout", function () {
        const children = [...this.children]
        children.forEach( e =>{
            e.style.display = "block"
        })
    })
})

slider

const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const slider = document.querySelector(".slider");
const urlBlackChair = 'url("./images/black_chair.png")'
const urlOrangeChair = 'url("./images/orange_chair.png")'
slider.style.backgroundImage = 'url("./images/black_chair.png")';

arrowLeft.addEventListener("click", () =>{
    if(slider.style.backgroundImage === urlBlackChair){
        slider.style.backgroundImage = urlOrangeChair;
    }else
        slider.style.backgroundImage = urlBlackChair;
})
arrowRight.addEventListener("click", () =>{
    if(slider.style.backgroundImage === urlBlackChair){
        slider.style.backgroundImage = urlOrangeChair;
    }else
        slider.style.backgroundImage = urlBlackChair;
})
