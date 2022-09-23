console.log("Welcome to Tic Tac Toe")
var turn = "X";
var gameover= false;

//function to change the turn
var changeTurn = ()=>{
    return turn==="X"?"0": "X"
}
//function to check for a win
var checkWin = ()=>{
    var boxtext= document.getElementsByClassName('boxtext');
    var wins=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
wins.forEach(e=>{
 if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText ===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
 document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won"
 gameover= true;
document.querySelector('.imgbox').getElementByTagName('img')[0].style.width="56px"
 }
})
}
//game logic
var boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    var boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText=turn;
            turn= changeTurn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
           }
        }
    })
})
//add onclick listener to reset button
reset.addEventListener('click',()=>{
    var boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gameover=false
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    document.querySelector('.imgbox').getElementByTagName('img')[0].style.width="0px"
})
