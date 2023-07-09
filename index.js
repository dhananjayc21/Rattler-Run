// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 


let  foodSound = new Audio('music/food.mp3');
let gameOverSound = new Audio('music/gameover.mp3');
let moveSound = new Audio('music/move.mp3');
let  musicSound = new Audio('music/music.mp3');


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

    gameEngine();
}





function does_snake_collide(snake) {
    
    /*In this we have two cases:
      1. either it collides with the wall
      2. or it collides with his own body*/


    
     // 1. If snake hits the wall

     if(snake[0].x >= 25 || snake[0].x <=0 || snake[0].y >= 25 || snake[0].y <=0){
        return true;
    }
        
   
    // 2. If snake hits his own body element

    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }



    return false;
}





function gameEngine(){
    // Part 1: Updating the snake array & Food
    if(does_snake_collide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0; 
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);


}


musicSound.play();
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}


window.requestAnimationFrame(game_loop);



window.addEventListener('keydown', e =>{
    
    
    inputDir = {x: 0, y: 0} 
    
    moveSound.play();


    //Snake's motion using arrow keys

    if(e.key==="ArrowUp"){
       
       inputDir.x = 0;
       inputDir.y = -1;
     }

    else if(e.key==="ArrowDown"){
       
        inputDir.x = 0;
        inputDir.y = 1;
     }

     else if(e.key==="ArrowLeft"){
       
        inputDir.x = -1;
        inputDir.y = 0;
     }

     else if(e.key==="ArrowRight"){

        inputDir.x = 1;
        inputDir.y = 0;
     }


});