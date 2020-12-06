function utopianTree(n) {

    for(var i=0, j=1; i < n+1; i++){
      i > 0 ? i % 2 == 0 ? j+=1 : j*=2 : null
    }
    return j
    
  }