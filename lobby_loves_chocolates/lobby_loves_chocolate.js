function chocolateFeast(n, c, m) {
    // Write your code here
    let wrappers = 0, count = 0, money = n;
    while(wrappers >= m || money >= c) {
        let bars;
        if(money >= c) {//buy
            bars = Math.floor(money / c);
            count += bars;
            wrappers += bars;
            money %= c;
        } else {
            bars = Math.floor(wrappers / m);
            count += bars;
            wrappers %= m;
            wrappers += bars;
            console.log(wrappers, bars, count, money);
        }
    }
    
    return count;
}

