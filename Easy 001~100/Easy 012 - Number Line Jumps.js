function kangaroo(x1, v1, x2, v2) {

    var kangarooOne = locations(x1,v1),
        kangarooTwo = locations(x2,v2),
        yesOrNo = "NO";
    //create array of jumps
    function locations(location, jumps){
    var result = [location, location+jumps]
    for(var i=0; i < 10000; i++){
      result.push(result[result.length - 1]+jumps)
    }
    return result
    }
    //find matching location
    for(var i=0; i < kangarooOne.length; i++){
        if(kangarooOne[i] === kangarooTwo[i]) {
            yesOrNo="YES"}
    }
    return yesOrNo
    
}