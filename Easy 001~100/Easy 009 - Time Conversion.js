function timeConversion(s) {
    
    var splited = s.split(':'),
    // [ '07', '05', '45PM' ]
        hours = splited[0],
        mins = splited[1],
        pm = splited[2].includes('PM'),
        am = splited[2].includes('AM');
 
    if(pm && hours != '12'){
        var secs = splited[2].replace('PM', ''); // remove 'PM'
        var addhour = parseInt(hours) + 12;
        var hour = addhour.toString();
    } else if(pm && hours == '12'){
        var secs = splited[2].replace('PM', '');
        var hour = hours;
    }else if(am && hours == '12'){
        var secs = splited[2].replace('AM', '')
        var hour = '00';
    } else if(am && hours != '12'){
        var secs = splited[2].replace('AM', '');
        var hour = hours;
    };
    var concatEachTime = hour.concat(mins, secs);
    var convertedTime = concatEachTime.match(/.{1,2}/g);
    var result = convertedTime.join(":");
    return result;
    
}