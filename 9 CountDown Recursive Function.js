function countDown(number) {
    if(number <= 0){
        console.log('All done!');
        return;
    }
    console.log(number)
    number--;
    countDown(number);
    
}

countDown(5) //5,4,3,2,1,All done!