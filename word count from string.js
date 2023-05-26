function characterCount(string) {
    const tempObj = {};
   
    for (var char of string) {
       
        //check char is only alphabats/
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            //check tempObj has key if not we define count 1;
            tempObj[char] = ++tempObj[char] || 1;
        }
    }
    console.log(tempObj);
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 96 && code < 123) && !(code > 47 && code < 58)){
        return false
    }
    return true;
}

characterCount('hello dilip hirapara'); 
//output 
// {
//     "h": 2,
//     "e": 1,
//     "l": 3,
//     "o": 1,
//     "d": 1,
//     "i": 3,
//     "p": 2,
//     "r": 2,
//     "a": 3
// }