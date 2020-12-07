function beautifulDays(i, j, k) {

    var result = 0;
    for(var i=i; i < j+1; i++){
      (Math.abs(i-parseInt(i.toString().split("").reverse().join("")))/k)%1==0?
      result++:null
    }
    return result 
  
}