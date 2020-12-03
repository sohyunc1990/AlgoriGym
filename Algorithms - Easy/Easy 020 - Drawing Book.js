function pageCount(n, p) {
    
    var pageTurns = Math.floor(p / 2);
    var totalTurns = Math.floor(n / 2);
    return Math.min(pageTurns, totalTurns-pageTurns)

}