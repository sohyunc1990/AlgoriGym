function plusMinus(arr) {

    var i;
    var result = [0, 0, 0]
    for(i=0; i < arr.length; i++){
        if(arr[i] > 0){
            result[0]++
        } else if(arr[i] < 0 ){
            result[1]++
        } else if(arr[i] == 0) {
            result[2]++
        }
    }
    var j;
    for(j=0; j < result.length; j++){
            console.log(result[j]/arr.length)
    }
    
}
