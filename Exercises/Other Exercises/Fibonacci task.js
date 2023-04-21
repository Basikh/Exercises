console.log('hello world!')
function fibonacciGenerator (n) {
    let array = [];
    if (n == 1) {
        array.push(0);
        console.log(array);
    }
    else if (n == 2){
        array.push(0,1);
        console.log(array);
    }
    else if (n == 0) {
        console.log(0);
    }
    else{
        array.push(0,1)
        for (let i = 0; i < n - 2; i++) {
            let k = array[i] + array[i +1]
            console.log(k);
            array.push(k);
            console.log('this is the output:' + array)
        }
    }
}
fibonacciGenerator (15);
