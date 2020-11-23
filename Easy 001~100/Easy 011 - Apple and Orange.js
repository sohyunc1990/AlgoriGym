function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var appleLocations = addDistances(a, apples),
      orangeLocations = addDistances(b, oranges),
      countForApple = countFruit(s, t, appleLocations),
      countForOrange = countFruit(s, t, orangeLocations);
    // create array of fruit locations
    function addDistances(location, fruit){
    var result = [];
    for(var i=0; i < fruit.length; i++){
      result.push(location+fruit[i])
    };
    return result;
    };
    //count fruit in Sam's house location
    function countFruit(startP, endP, fruitArray){
    var result = 0;
    for(var j=0; j < fruitArray.length; j++){
      if(fruitArray[j] >= startP && fruitArray[j] <= endP){
        result ++;
      };
    };
    return result;
    };
    console.log(countForApple)
    console.log(countForOrange)
    
}