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

keyDel.addEventListener("click", eraseNumber);

function eraseNumber(){

    if(calculatorScreen == ""){
        calculatorScreen.textContent = "veillez saisir une opération";


        setTimeout(()=>{
            calculatorScreen.textContent = "";
        },1000)
    }
    else{
    calculatorScreen.textContent = [...calculatorScreen.textContent].slice(0, -1).join();
    }
}








