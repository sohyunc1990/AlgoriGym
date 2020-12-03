function countingValleys(steps, path) {

    var valley = 0,
        result = 0;
    for(var i=0; i < steps; i++){
        path[i] == "U"? valley++ : valley--;
        if(valley == 0){
            path[i] == "U"? result++ : null
        }
    }
  return result
  
}