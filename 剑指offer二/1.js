/**
 * 整数除法:
 * 
 * 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 
 */

var divide = function(a, b) {
    let flag = ''
    let res = 0
    if (a === -Math.pow(2, 31) && b === -1) {
    return Math.pow(2, 31) - 1;
    }
    if((a > 0 && b < 0) || (a < 0 && b > 0)){
        flag = false
    }else{
        flag = true
    }
    if(a < 0){
        a = -a 
    }
    if(b < 0){
        b = -b
    }
    while(a > b){
        a = a - b
        res++
    }
    if(flag){
        return res > 0 ? res : 0
    }else{
        return res > 0 ? "-"+res : 0
    }
   
};
