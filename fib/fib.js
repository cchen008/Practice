const fib = (x) => {
    if(x === 0) {
        return 0;
    } else if(x === 1 || x === 2){
        return 1;
    } else {
        return fib(x-2) + fib(x-1);
    }
}

//console.log(fib(40));

let mem = [0,1,1];
const fibMem = (x, arr) => {
    if(arr[x] !== undefined) {
        return arr[x];
    } else {
        let result = fib(x-2) + fib(x-1);
        mem[x] = result;
        return result;
    }
}

//console.log(fibMem(50,mem));

const fibBot = (x) => {
    let bot = [0, 1, 1];
    for(let i = 3; i <= x; i++) {
        bot[i] = bot[i-2] + bot[i-1];
    }
    return bot[x];
}

console.log(fibBot(250));