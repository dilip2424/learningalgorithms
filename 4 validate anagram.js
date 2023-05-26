function validAnagrams(str1, str2) {
    if(str1.length !== str2.length) return false;
    let tempobj = {}
    for (str of str1) {
       tempobj[str] = (tempobj[str] || 0) + 1;
    }
    for (string2 of str2) {
        if(!tempobj[string2]) return false;
        if(tempobj[string2]) tempobj[string2]--;
    }
    return true;
}

console.log(validAnagrams('aaz','aaz')) //true
console.log(validAnagrams('aaz','aaaz')) //false
console.log(validAnagrams('rat','cat')) //false