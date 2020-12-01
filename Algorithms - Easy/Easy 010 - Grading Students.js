function gradingStudents(grades) {
    
    var fiveMultiples = [],
        finalGrade = [];
    for (var i=1; i < 21; i++){
        fiveMultiples.push(5*i)
    }; // fiveMultiples = [5,10,15,20,25...]
    function difference(a, b){
            return Math.abs(a - b);
        };
    for (var j=0; j < grades.length; j++){
        var closestMultiple = fiveMultiples.reduce((a,b)=>{
            return (Math.abs(b - grades[j]) < Math.abs(a - grades[j])? b : a);
        });
        var diff = difference(closestMultiple, grades[j])
        if ((grades[j] < 37) || (closestMultiple < grades[j])){
        finalGrade.push(grades[j])
        }else if((grades[j] > 37) && (diff < 3)){
        finalGrade.push(closestMultiple)
    }
    }
    return finalGrade
    
}