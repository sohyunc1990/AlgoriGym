function catAndMouse(x, y, z) {
  
    return Math.abs(x - z) == Math.abs(y - z) ? "Mouse C" : 
            Math.abs(x - z) > Math.abs(y - z) ? "Cat B" : "Cat A"
  
  }