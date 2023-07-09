function does_snake_collide(snake) {
    
    /*In this we have two cases:
      1. either it collides with the wall
      2. or it collides with his own body*/


    
     // 1. If snake hits the wall

     if(snake[0].x >= 25 || snake[0].x <=0 || snake[0].y >= 25 || snake[0].y <=0){
        return true;
    }
        
   
    /* 2. If snake hits his own body element.Basically we will be interating over all the snake body elements starting from 
          the element present just after the head of snake and continuing till we reach the tail and compare the x and y coorinates 
          of this element with the coordinates of the head.*/ 

    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }



    return false;
}
