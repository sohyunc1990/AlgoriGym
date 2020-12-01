function reverseArray(a) {

    var result = [];
    for(var i=0; i < a.length; i++){
        result.push(a[a.length-i-1])
    }
    return result

}