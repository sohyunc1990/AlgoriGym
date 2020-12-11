function permutationEquation(p) {

    var result = [];
    for(var i=0; i < p.length; i++){
    result.push(p.findIndex((e) => e == p.findIndex((e) => e == i+1)+1)+1)
    }
    return result
  
  }