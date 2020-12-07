function viralAdvertising(n) {

    var s = 5,
        c = 2;
    for(var i=1; i < n; i++){
      s = Math.floor(s/2)*3
      c += Math.floor(s/2)
    }
    return c
  
}