function birthdayCakeCandles(candles) {
    
    var max = Math.max(...candles);    
    var result = candles.filter(c => c === max);    
    return result.length;
    
}