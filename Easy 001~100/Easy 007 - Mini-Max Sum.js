function miniMaxSum(arr) {

    var sortedArray = arr.sort();
    var maxSum = sortedArray.slice(1,5).reduce((a,b)=> a+b)
    var miniSum = sortedArray.slice(0,4).reduce((a,b)=> a+b)
    console.log(miniSum, maxSum)
    
}