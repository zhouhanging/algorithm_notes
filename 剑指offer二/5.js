/**
 * 单词长度的最大乘积:
 * 
 * 给定一个字符串数组 words，请计算当两个字符串 words[i] 和 words[j] 不包含相同字符时，它们长度的乘积的最大值。
 * 假设字符串中只包含英语的小写字母。如果没有不包含相同字符的一对字符串，返回 0
 */

var maxProduct = function(words) {
    let map = new Map(),
        n = words.length,
        res = 0;
    const asciiA = "a".charCodeAt();
    for(let i = 0;i < n;i++){
        let temp = 0;
        for(const c of words[i]){
            temp |= 1 << (c.charCodeAt() - asciiA);
        }
        // 根据temp来设置单词的长度
        if(map.has(temp)){
            // 设置单词长度的最大值
            map.set(temp,Math.max(words[i].length,map.get(temp)));
        }else{
            map.set(temp,words[i].length);
        }
    }
    for(const keyA of map.keys()){
        for(const keyB of map.keys()){
            // 按位与操作为0，则代表单词字符不重复
             if((keyA & keyB) === 0){
                 res = Math.max(res,map.get(keyA) * map.get(keyB));
             }
        }
    }
    return res;
};
