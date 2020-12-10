function circularArrayRotation(a, k, queries) {

    var result = [];
    for(var i=0; i < k; i++){
        a.unshift(a.pop())
    }
    if(Array.isArray(queries) == true){
        for(var i=0; i < queries.length; i++){
            result.push(a[queries[i]])
        }
    } else {
        for(var i=0; i < queries; i++){
            result.push(a[i])
        }
    }
  return result
  
}