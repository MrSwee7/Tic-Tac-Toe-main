const btns = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".resetBtn");
const newGameBtn = document.querySelector(".newGameBtn");
const result = document.querySelector(".msg");
const divResult = document.querySelector(".resultContainer");
const gameInfo = document.querySelector(".info");


let typeO = true ;

divResult.classList.add("hide");

//Event on Btn
btns.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        if(typeO){
            btn.innerHTML = "O";
            typeO = false
            btn.disabled = true;
        }else {
            btn.innerHTML = "X"
            typeO = true
            btn.disabled = true;
        }
        checkPattern();
    });
});
// Winning patterns 
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,8],
    [0,4,8],
    [3,4,6]
];
// pattern Checking
const checkPattern = () => {
    for(let pattern of winPattern) {
    const patr1 = btns[pattern[0]].innerHTML;
    const patr2 = btns[pattern[1]].innerHTML;
    const patr3 = btns[pattern[2]].innerHTML;
    if(patr1 != "" && patr2 != ""&& patr3 != "" ){
        if( patr1 === patr2 && patr2 === patr3){
            disabledBtn();
            showResult(patr1);
}}
};
    
};  
// result Showing proccess
const showResult = (patr1) => {
    result.innerText = `Congratulations! Winner is ${patr1}`;
    divResult.classList.remove("hide");
};
// disabled btn
const disabledBtn = ()=> {
    for(let box of btns){
    box.disabled = true;
    box.innertext = "";
}};

//enabled Btn
const enabledBtn = () => {
    for(let box of btns){
        box.disabled = false;
        box.innerText = "";
        divResult.classList.add("hide");
    }
}

// Reset & New Game Btn

resetBtn.addEventListener("click", ()=> {
    enabledBtn();
    });

newGameBtn.addEventListener("click", ()=> {
    enabledBtn();
});

//Game Info
gameInfo.addEventListener("click", ()=> {
    divResult.classList.add("hide");
})
