console.log("Dupa")

//dropdown
const dropDown = document.querySelector("nav ul").firstElementChild

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

//slider

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

const arrow = [...document.querySelectorAll(".list_arrow")]
arrow.forEach( e => {
    e.addEventListener("click", (e) => {
        const listPanel = e.currentTarget.nextElementSibling;
        if(listPanel.style.display === "block"){
            listPanel.style.display = "none";
        }else{
            listPanel.style.display = "block";
        }
    })
})

const dropDownList = [...document.querySelectorAll(".drop_down_list")];
const typeOptions = [...dropDownList[0].lastElementChild.children]
const colorOptions = [...dropDownList[1].lastElementChild.children]
const patternOptions = [...dropDownList[2].lastElementChild.children]
const transportCheck = document.querySelector(".checkbox #transport")
let leftPanelChairType = document.querySelector(".panel_left .title")
let leftPanelColorOption = document.querySelector(".panel_left .color")
let leftPanelPatternOption = document.querySelector(".panel_left .pattern")
let leftPanelTransport = document.querySelector(".panel_left .transport")
let rightPanelChairType = document.querySelector(".panel_right .title")
let rightPanelColorOption = document.querySelector(".panel_right .color")
let rightPanelPatternOption = document.querySelector(".panel_right .pattern")
let rightPanelTransport = document.querySelector(".panel_right .transport")
let sum = document.querySelector(".sum");
rightPanelChairType.innerText = 0;
rightPanelTransport.innerText = 0;

// wybranie danego typu krzesla i wrzucenie jego nazwy do kalkulatora

let checkValue = (valueOfRightSide) =>{
    let sumOfProducts = 0;
    sum.innerText = parseInt(rightPanelChairType.innerText) + parseInt(rightPanelTransport.innerText);

}

typeOptions.forEach(e => {
    e.addEventListener("click", function () {
       leftPanelChairType.innerText = this.innerText;
        rightPanelChairType.innerText = 200;
        checkValue(rightPanelChairType);
    })
})


colorOptions.forEach(e => {
    e.addEventListener("click", function () {
        leftPanelColorOption.innerText = this.innerText;
        rightPanelColorOption.innerText = 0;
    })
})

patternOptions.forEach(e => {
    e.addEventListener("click", function () {
        leftPanelPatternOption.innerText = this.innerText;
        rightPanelPatternOption.innerText = 0;
    })
})


transportCheck.addEventListener("click", function () {
    if(this.checked === true) {
        leftPanelTransport.innerText = "Z Transportem";
        rightPanelTransport.innerText = 70;
        checkValue(rightPanelTransport);
    }
    else {
        leftPanelTransport.innerText = "";
        rightPanelTransport.innerText = "0";
        checkValue(rightPanelTransport);
    }
})


