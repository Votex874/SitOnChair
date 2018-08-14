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

//arrow kalkulator

// const arrow = [...document.querySelectorAll(".list_arrow")]
// arrow.forEach( e => {
//     e.addEventListener("click", (e) => {
//         const listPanel = e.currentTarget.nextElementSibling;
//         if(listPanel.style.display === "block"){
//             listPanel.style.display = "none";
//         }else{
//             listPanel.style.display = "block";
//         }
//     })
// })
//
// const dropDownList = [...document.querySelectorAll(".drop_down_list")];
// const typeOptions = [...dropDownList[0].lastElementChild.children]
// const colorOptions = [...dropDownList[1].lastElementChild.children]
// const patternOptions = [...dropDownList[2].lastElementChild.children]
// const transportCheck = document.querySelector(".checkbox #transport")
// let leftPanelChairType = document.querySelector(".panel_left .title")
// let leftPanelColorOption = document.querySelector(".panel_left .color")
// let leftPanelPatternOption = document.querySelector(".panel_left .pattern")
// let leftPanelTransport = document.querySelector(".panel_left .transport")
// let rightPanelChairType = document.querySelector(".panel_right .title")
// let rightPanelColorOption = document.querySelector(".panel_right .color")
// let rightPanelPatternOption = document.querySelector(".panel_right .pattern")
// let rightPanelTransport = document.querySelector(".panel_right .transport")
// let sum = document.querySelector(".sum");
// rightPanelChairType.innerText = 0;
// rightPanelTransport.innerText = 0;
//
// // wybranie danego typu krzesla i wrzucenie jego nazwy do kalkulatora
//
// let checkValue = (valueOfRightSide) =>{
//     let sumOfProducts = 0;
//     sum.innerText = parseInt(rightPanelChairType.innerText) + parseInt(rightPanelTransport.innerText);
//
// }
//
// typeOptions.forEach(e => {
//     e.addEventListener("click", function () {
//        leftPanelChairType.innerText = this.innerText;
//         rightPanelChairType.innerText = 200;
//         checkValue(rightPanelChairType);
//     })
// })
//
//
// colorOptions.forEach(e => {
//     e.addEventListener("click", function () {
//         rightPanelColorOption.innerText = 0;
//         leftPanelColorOption.innerText = this.innerText;
//     })
// })
//
// patternOptions.forEach(e => {
//     e.addEventListener("click", function () {
//         leftPanelPatternOption.innerText = this.innerText;
//         rightPanelPatternOption.innerText = 0;
//     })
// })
//
//
// transportCheck.addEventListener("click", function () {
//     if(this.checked === true) {
//         leftPanelTransport.innerText = "Z Transportem";
//         rightPanelTransport.innerText = 70;
//         checkValue(rightPanelTransport);
//     }
//     else {
//         leftPanelTransport.innerText = "";
//         rightPanelTransport.innerText = "0";
//         checkValue(rightPanelTransport);
//     }
// })
////kalkulator z klasa
// class userDecision {
//     constructor(){
//         this.userChairType = document.querySelector(".panel_right .title");
//         this.userChairColor = document.querySelector(".panel_right .color");
//         this.userChairPattern = document.querySelector(".panel_right .pattern");
//         this.userTransport = document.querySelector(".panel_right .transport");
//         this.listArrows = [...document.querySelectorAll(".list_arrow")];
//         this.sumOfProducts = document.querySelector(".sum strong")
//     }
//     summary(){
//         let valueOptions = [...document.querySelectorAll(".value")];
//         let valueOfProducts = [];
//         valueOptions.forEach( e =>{
//             if(e.innerText === ""){
//                 valueOfProducts.push(0)
//             }else{
//                 valueOfProducts.push(e.innerText)
//             }
//         })
//         let summary = valueOfProducts.reduce( (prev, curr) => {
//             return parseInt(prev) + parseInt(curr);
//         },0)
//         this.sumOfProducts.innerText = summary;
//     }
//     chooseOptions(){
//         this.listArrows.forEach( e => {
//             e.addEventListener("click", function () {
//                 const listPanel = this.nextElementSibling;
//                 if (listPanel.style.display === "block") {
//                     listPanel.style.display = "none";
//                 } else {
//                     listPanel.style.display = "block";
//                 }
//             })
//         })
//     }
//     chooseTransport(){
//         const checkTranposrt = document.querySelector("#transport")
//         checkTranposrt.addEventListener("click", e => {
//             if(e.currentTarget.checked === true){
//                 this.userTransport.innerText = 70;
//                 this.summary();
//                 document.querySelector(".panel_left .transport").innerText ="Transport";
//             }else{
//                 this.userTransport.innerText = "";
//                 this.summary();
//                 document.querySelector(".panel_left .transport").innerText ="";
//             }
//         })
//     }
//     printType(){
//         this.chooseOptions()
//         const optionsType = [...this.listArrows[0].nextElementSibling.children]
//         optionsType.forEach( e =>{
//             e.addEventListener("click",  e => {
//                 const leftSidebar = document.querySelector(".panel_left .title");
//                 leftSidebar.innerText = e.currentTarget.innerText;
//                 this.userChairType.innerText = 210;
//                 this.summary();
//             })
//
//         })
//     }
//     printColor(){
//         this.chooseOptions()
//         const optionsType = [...this.listArrows[1].nextElementSibling.children]
//         optionsType.forEach( e =>{
//             e.addEventListener("click",  e => {
//                 const leftSidebar = document.querySelector(".panel_left .color");
//                 leftSidebar.innerText = e.currentTarget.innerText;
//                 this.userChairColor.innerText = 30;
//                 this.summary();
//             })
//
//         })
//     }
//     printPattern(){
//         this.chooseOptions()
//         const optionsType = [...this.listArrows[2].nextElementSibling.children]
//         optionsType.forEach( e =>{
//             e.addEventListener("click",  e => {
//                 const leftSidebar = document.querySelector(".panel_left .pattern");
//                 leftSidebar.innerText = e.currentTarget.innerText;
//                 this.userChairPattern.innerText = 60;
//                 this.summary();
//             })
//
//         })
//     }
//     userMenu(){
//         this.printType()
//         this.printColor()
//         this.printPattern()
//         this.chooseTransport();
//     }
// }
//
// const user = new userDecision();
// user.userMenu()

