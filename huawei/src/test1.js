// HJ1 字符串最后一个单词的长度
export function test1(s){
    // api解决
    return s.trim().split(" ").pop().length
}