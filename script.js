let Score=document.getElementById("score")
let Time=document.getElementById("time")
let StartGameBtn=document.getElementById("startnewgame")
let PauseGameBtn=document.getElementById("pausegame")
let squares=document.querySelectorAll(".square")
let grid=document.getElementsByClassName("grid")[0];
let score=0
let timeleft=0
let hitposition=null
let moleId
let timerId

function randommole(){
    squares.forEach(square => {
        square.classList.remove("mole")
    });

   let randomposition=squares[Math.floor(Math.random()*squares.length)]
   randomposition.classList.add("mole")
   hitposition=randomposition.id

}

squares.forEach(square =>{
    square.addEventListener("mousedown",()=>{
        if(timerId!==null){
        if(hitposition===square.id){
            score++;
            Score.innerText=`Your Score:${score}`
            hitposition=null
        }
    }
    })
})
randommole();

function countdown(){
    timeleft--
    Time.innerText=`Time Left:${timeleft}s`
    if(timeleft===0){
        clearInterval(moleId)
        clearInterval(timerId)
        grid.style.display='none'
}
}

function startgame(){
    PauseGameBtn.innerText=`Pause`
    
    score=0
    Score.innerText=`Your Score:${score}`
    Time.innerText=`Time Left:${timeleft}s`
    grid.style.display='flex'
    timeleft=60
   moleId= setInterval(randommole,1000)
    timerId=setInterval(countdown,1000)
}

function pausegame(){
    if(PauseGameBtn.textContent==='Pause'){
        console.log("hello")
        clearInterval(moleId)
        clearInterval(timerId)
       
        moleId=null
        timerId=null
        PauseGameBtn.innerText=`Resume`
    }
    else{
       
        moleId=setInterval(randommole,1000)
       timerId= setInterval(countdown,1000)
       PauseGameBtn.innerText=`Pause`
    }
}

StartGameBtn.addEventListener("click",startgame)
PauseGameBtn.addEventListener("click",pausegame)


















































// let Score=document.getElementById("score")
// let Time=document.getElementById("time")

// let StartNewGame=document.getElementById("startnewgame")
// let PauseGame=document.getElementById("pausegame")

// let squares=document.querySelectorAll(".square") 

// let score=0;
// let timeleft=0;
// let hitposition=null;
// let moleId;
// let timerId;
// function RandomMole(){
//     squares.forEach(square => {
//         square.classList.remove("mole")  
//     });

//     let randomposition=squares[Math.floor(Math.random()*squares.length)]
//     randomposition.classList.add("mole")
//     hitposition=randomposition.id;
// }

// squares.forEach(square=>{
//     square.addEventListener("mousedown",()=>{
//         if(timerId!==0){
//         if(square.id===hitposition){
//             score++;
//             Score.innerText=`Your Score:${score}`
//             hitposition=null;
//         }
//     }
    
//     })
// })

// function countdown(){
//       timeleft--;
//       Time.innerText=`Time Left:${timeleft}s`
//       if(timeleft===0){
//                clearInterval(moleId)
//                clearInterval(timerId)
               
//       }
// }
// RandomMole();


// function startgame(){
//     score=0;
//     timeleft=60;
//     moleId=setInterval(RandomMole,1000)
//     timerId=setInterval(countdown,1000)
// }

// function pausegame(){
//     if(PauseGame.textContent==='Pause'){
//         clearInterval(moleId)
//         clearInterval(timerId)
//         timerId=null
//         moleId=null
//         PauseGame.innerText=`Resume`
//     }
//     else{
//         moleId=setInterval(RandomMole,1000)
//         timerId=setInterval(countdown,1000)
//         PauseGame.innerText=`Pause`
        
        
//     }
// }

// StartNewGame.addEventListener("click",startgame)

// PauseGame.addEventListener("click",pausegame)