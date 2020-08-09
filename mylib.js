
function hasCollided(rbullet, lwall){

    bulletRightEdge = rbullet.x+rbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
      return false;
  
  }