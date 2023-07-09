// Game Constants & Variables

let direction = {x: 0, y: 0};
let snake_speed = 15;
let score = 0;
let last_Paint_Time = 0;

food = {x: 24, y: 2};


let snakeArr = [
    {x: 2, y: 24}
];



//game_loop function
function game_loop(curr_time) {

    window.requestAnimationFrame(game_loop);


    //fps control
    if((curr_time - last_Paint_Time)/1000 < 1/snake_speed){//we have divided by thousand as rhs is in millisecs.
        return;
    }

    last_Paint_Time = curr_time;

    game_principles();
}


musicSound.play();
// let hiscore = localStorage.getItem("hiscore");
// if(hiscore === null){
//     hiscoreval = 0;
//     localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
// }
// else{
//     hiscoreval = JSON.parse(hiscore);
//     hiscoreBox.innerHTML = "HiScore: " + hiscore;
// }


window.requestAnimationFrame(game_loop);



window.addEventListener('keydown', e =>{
    
    
    direction = {x: 0, y: 0} 
    
    moveSound.play(); 


    //Snake's motion using arrow keys

    if(e.key==="ArrowUp"){
       
       direction.x = 0;
       direction.y = -1;
     }

    else if(e.key==="ArrowDown"){
       
        direction.x = 0;
        direction.y = 1;
     }

     else if(e.key==="ArrowLeft"){
       
        direction.x = -1;
        direction.y = 0;
     }

     else if(e.key==="ArrowRight"){

        direction.x = 1;
        direction.y = 0;
     }


});