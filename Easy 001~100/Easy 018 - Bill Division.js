function bonAppetit(bill, k, b) {

    var charged = bill.reduce((a,b)=>a+b) / 2;
        bill.splice(k, 1);
    var actual = bill.reduce((a,b)=>a+b) / 2;
    if(actual == b){
    console.log("Bon Appetit")
    } else {
    console.log(charged-actual)
  }
  
}