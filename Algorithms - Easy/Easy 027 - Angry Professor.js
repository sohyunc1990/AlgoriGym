function angryProfessor(k, a) {

    var aa = a.map(a=>{return a <= 0});
    return aa.filter(Boolean).length < k ? 'YES' : 'NO';
  
  }