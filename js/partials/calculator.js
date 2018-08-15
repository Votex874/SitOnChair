
class userDecision {
    constructor(){
        this.userChairType = document.querySelector(".panel_right .title");
        this.userChairColor = document.querySelector(".panel_right .color");
        this.userChairPattern = document.querySelector(".panel_right .pattern");
        this.userTransport = document.querySelector(".panel_right .transport");
        this.listArrows = [...document.querySelectorAll(".list_arrow")];
        this.sumOfProducts = document.querySelector(".sum strong")
    }
    summary(){
        let valueOptions = [...document.querySelectorAll(".value")];
        let valueOfProducts = [];
        valueOptions.forEach( e =>{
            if(e.innerText === ""){
                valueOfProducts.push(0)
            }else{
                valueOfProducts.push(e.innerText)
            }
        })
        let summary = valueOfProducts.reduce( (prev, curr) => {
            return parseInt(prev) + parseInt(curr);
        },0)
        this.sumOfProducts.innerText = summary;
    }
    chooseOptions(){
        this.listArrows.forEach( e => {
            e.addEventListener("click", function () {
                const listPanel = this.nextElementSibling;
                if (listPanel.style.display === "block") {
                    listPanel.style.display = "none";
                } else {
                    listPanel.style.display = "block";
                }
            })
        })
    }
    chooseTransport(){
        const checkTranposrt = document.querySelector("#transport")
        checkTranposrt.addEventListener("click", e => {
            if(e.currentTarget.checked === true){
                this.userTransport.innerText = 70;
                this.summary();
                document.querySelector(".panel_left .transport").innerText ="Transport";
            }else{
                this.userTransport.innerText = "";
                this.summary();
                document.querySelector(".panel_left .transport").innerText ="";
            }
        })
    }
    printType(){
        this.chooseOptions()
        const optionsType = [...this.listArrows[0].nextElementSibling.children]
        optionsType.forEach( e =>{
            e.addEventListener("click",  e => {
                this.listArrows[0].nextElementSibling.style.display = "none";
                const leftSidebar = document.querySelector(".panel_left .title");
                leftSidebar.innerText = e.currentTarget.innerText;
                this.userChairType.innerText = 210;
                this.summary();
            })

        })
    }
    printColor(){
        this.chooseOptions()
        const optionsType = [...this.listArrows[1].nextElementSibling.children]
        optionsType.forEach( e =>{
            e.addEventListener("click",  e => {
                this.listArrows[1].nextElementSibling.style.display = "none";
                const leftSidebar = document.querySelector(".panel_left .color");
                leftSidebar.innerText = e.currentTarget.innerText;
                this.userChairColor.innerText = 30;
                this.summary();
            })

        })
    }
    printPattern(){
        this.chooseOptions()
        const optionsType = [...this.listArrows[2].nextElementSibling.children]
        optionsType.forEach( e =>{
            e.addEventListener("click",  e => {
                this.listArrows[2].nextElementSibling.style.display = "none";
                const leftSidebar = document.querySelector(".panel_left .pattern");
                leftSidebar.innerText = e.currentTarget.innerText;
                this.userChairPattern.innerText = 60;
                this.summary();
            })

        })
    }
    userMenu(){
        this.printType()
        this.printColor()
        this.printPattern()
        this.chooseTransport();
    }
}

export {userDecision}

