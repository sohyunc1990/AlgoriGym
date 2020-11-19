function compareTriplets(a, b) {
    
    var score = [0,0]
    
    for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score

}