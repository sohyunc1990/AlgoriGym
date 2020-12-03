function getMoneySpent(keyboards, drives, b) {
    
    var a = [];
    for(var i=0; i < keyboards.length; i++){
      for(var j=0; j < drives.length; j++){
        if(keyboards[i]+drives[j] <= b){
          a.push(keyboards[i]+drives[j])
      }
    }
    }
    return a.length > 0 ? Math.max(...a) : -1
    
}