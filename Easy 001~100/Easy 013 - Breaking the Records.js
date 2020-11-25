function breakingRecords(scores) {

    var highest = scores[0],
     lowest = scores[0],
     maxminCount = [0, 0];
    for(var i=1; i < scores.length; i++){
       if(scores[i] > highest){
        highest = scores[i]
        maxminCount[0]++;
    } else if(scores[i] < lowest){
     lowest = scores[i]
     maxminCount[1]++;
    }
   }
   return maxminCount
   
}