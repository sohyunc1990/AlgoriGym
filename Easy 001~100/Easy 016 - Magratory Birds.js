function migratoryBirds(arr) {

    var countedArray = {}, // { '1': 2, '2': 2, '3': 3, '4': 3, '5': 1 }
        result = [];
    for (var i=0; i < arr.length; i++){
        if(!countedArray[arr[i]])
        countedArray[arr[i]] = 0;
        ++countedArray[arr[i]];
    }
    var highest = Object.values(countedArray).reduce((a, b) => a > b ? a : b )
    for(var i=0; i < Object.entries(countedArray).length; i++){
        if(Object.values(countedArray)[i] == highest){
         result.push(Object.entries(countedArray)[i])
    }
  }
  return result[0][0]

}