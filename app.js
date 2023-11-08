const calculatorScreen = document.querySelector(".calculator-screen");
const info = document.querySelector(".info");
const keyButtons = document.querySelectorAll(".key");

let expression =""

keyButtons.forEach(keyButton =>{
    keyButton.addEventListener("click", displayNumber);

    function displayNumber(){
        keyButton.classList.add("active");
        calculatorScreen.textContent = calculatorScreen.textContent + keyButton.value;
        expression = calculatorScreen.textContent;

        setTimeout(()=>{
            keyButton.classList.remove("active")
        },200)
    
    }
    
})

//display the result 

const keyEqual = document.querySelector(".key-equal");

keyEqual.addEventListener("click", calcul);

function calcul(){
    keyEqual.classList.add("active");

    setTimeout(()=>{
        keyEqual.classList.remove("active")
    },200);

    if(calculatorScreen.textContent == ""){
        calculatorScreen.textContent = "veillez saisir une opération";


        setTimeout(()=>{
            calculatorScreen.textContent = "";
        },1000)
    }
    else{
        calculatorScreen.textContent = eval(expression)
    }
}

//reset the calculator

const keyReset = document.querySelector(".key-reset");

keyReset.addEventListener("click", resetDisplay);

function resetDisplay(){
    keyReset.classList.add("active");

    setTimeout(()=>{
        keyReset.classList.remove("active")
    },200);

    calculatorScreen.textContent = "";
}


//erase

const keyDel = document.querySelector(".key-del");

keyDel.addEventListener("click", eraser);

function eraser(){

    if(calculatorScreen == ""){
        calculatorScreen.textContent = "veillez saisir une opération";


        setTimeout(()=>{
            calculatorScreen.textContent = "";
        },1000)
    }
    else{
        calculatorScreen.textContent = calculatorScreen.textContent.slice(0, -1);
    }
}



//Choose the theme
const themes = document.querySelectorAll(".theme");
const themeSelector = document.querySelector(".theme-selector");
const body = document.querySelector("body");
const headerCalculator = document.querySelector(".header-calculator");
const themeSwitch = document.querySelector(".theme-switch");
const calculatorKeypad = document.querySelector(".calculator-keypad");


themes.forEach(theme=>{
    theme.addEventListener("click", changeTheme)

    function changeTheme(){
        if(theme.textContent === "1"){
            themeSelector.style.marginLeft = "0";
            themeSelector.style.marginRight = "auto";
            body.classList.remove("theme2");
            headerCalculator.classList.remove("theme2");
            themeSwitch.classList.remove("theme2");
            calculatorScreen.classList.remove("theme2");
            calculatorKeypad.classList.remove("theme2");
            keyDel.classList.remove("theme2");
            keyReset.classList.remove("theme2");
        }
        else if(theme.textContent === "2"){
            themeSelector.style.marginLeft = "auto";
            themeSelector.style.marginRight = "auto";
            body.classList.add("theme2");
            headerCalculator.classList.add("theme2");
            themeSwitch.classList.add("theme2");
            calculatorScreen.classList.add("theme2");
            calculatorKeypad.classList.add("theme2");
            keyDel.classList.add("theme2");
            keyReset.classList.add("theme2");
        }
        else if(theme.textContent === "3"){
            themeSelector.style.marginLeft = "auto";
            themeSelector.style.marginRight = "0";
        }
    }
})








