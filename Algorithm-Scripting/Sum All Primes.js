function sumPrimes(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (isPrimes(i)) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}
//判断是否是质数
function isPrimes(n) {
    if (n == 1) {
        return false;
    }
    if (n == 2) {
        return true;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// isPrimes(10);
sumPrimes(10);