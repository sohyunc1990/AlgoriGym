function designerPdfViewer(h, word) {

    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        answer = [];
    for(var i=0; i < word.length; i++){
      answer.push(h[alphabets.indexOf(word[i])])
    }
    return Math.max(...answer)*word.length
  
  }