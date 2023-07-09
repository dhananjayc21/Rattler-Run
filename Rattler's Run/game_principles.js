function game_principles(){

    /*Now we need two thing:
      1. Increasing the length of the snake if it hits the food particle.
      2. Displaying the snake and the food on the board.*/



  // Part 1: Updating the snake array && position of the snake body elements and food.


  if(does_snake_collide(snakeArr)==true){
      
      musicSound.pause();
      gameOverSound.play();
      alert("Game Over. Press any key to play again!");
      
      //Placing the head of the snake at the starting (2,24)co-ordinates again. 
      direction =  {x: 0, y: 0}; 
      snakeArr = [{x:2, y: 24}];
      musicSound.play();
      //reset the score till now to zero.
      score = 0; 
  }

  //Increasing the length of the snake if it eats the apple.
  
  if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
      
      
      foodSound.play();
      score += 1;


      // if(score>hiscoreval){
      //     hiscoreval = score;
      //     localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
      //     hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
      // }
      // scoreBox.innerHTML = "Score: " + score;




      snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y});



      //generating the random positions for the apple after it has been eaten

      let a = 2;
      let b = 24;

      food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}


  }

  // Moving the snake


  for (let i = snakeArr.length - 2; i>=0; i--) { 
      snakeArr[i+1] = {...snakeArr[i]};
  }

  snakeArr[0].x += direction.x;
  snakeArr[0].y += direction.y;



  // Part 2: Display the snake and Food


  // 1. Display the snake

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




  // 2. Display the food


  foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food')
  board.appendChild(foodElement);


}