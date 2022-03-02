/**
 * 前 n 个数字二进制中 1 的个数:
 * 
 * 给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。
 */


var countBits = function (n) {
    const res = [];
    for(let i = 0;i < n + 1;i++){
        res[i] = countOnes(i);
    }
    // 返回结果
    return res;
};
var countOnes = function(x){
    let count = 0;
    while(x > 0){
        x &= x - 1;
        // 统计次数
        count++;
    }
    return count;
}
