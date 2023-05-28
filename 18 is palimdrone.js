function isPalimdrom(string) {
    var string = string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    console.log(string)
    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - i - 1]){
            return false;
        }
    }
    return true;
}

isPalimdrom('0P');