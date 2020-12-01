function sockMerchant(n, ar) {

    var sortedArray = {}, // { '10': 4, '20': 3, '30': 1, '50': 1 }
      pairCount = 0;
    for(var i=0; i < ar.length; i++){
        if(!sortedArray[ar[i]])
        sortedArray[ar[i]] = 0
        ++sortedArray[ar[i]];
    }
    for(var i=0; i < Object.values(sortedArray).length; i++){
        if(Math.floor(Object.values(sortedArray)[i]/2)){
        pairCount+= Math.floor(Object.values(sortedArray)[i]/2);
        }
    }
  return pairCount

}