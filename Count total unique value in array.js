function countUniqueValues(arrayvalue) {
    let tempvalue = "";
    let totalcount = 0;
    for (value of arrayvalue) {
        if(value != tempvalue){
            totalcount++;
            tempvalue = value;
        }
    }
    return totalcount;
}

countUniqueValues([1,1,1,1,2]) //2
countUniqueValues([1,1,1,1,2,3,4,7]) //5