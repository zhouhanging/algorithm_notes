/**
 * 二进制加法个人:
 * 
 * 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出
 */

var addBinary = function(a, b) {
    const len = Math.max(a.length,b.length);
    let res = "",temp = 0;
    for(let i = 0;i < len;i++){
        if(a.length !== len){
            a = "0" + a;
        }
        if(b.length !== len){
            b = "0" + b;
        }
    }
    for(let i = len - 1;i >= 0;i--){
        let x = a.charAt(i),
            y = b.charAt(i);
        let sum = Number(x) + Number(y) + temp;
        temp = sum > 1 ? 1 : 0;
        sum = sum > 1 ? sum - 2 : sum;
        res = sum + res;
    }
    if(temp === 1){
        res = temp + res;
    }
    return res;
}
