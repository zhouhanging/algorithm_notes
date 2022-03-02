/**
 * 只出现一次的数字:
 * 
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */

let singleNumber = function(nums) {
    // 使用es6的map结构来存储
    let map = new Map()
    // for/of 可以访问数组的元素值---for/in 访问数组的下标
    for(let n of nums){
        let count = map.get(n) || 0
        count++
        /**
         * map结构：
         * let map = {
         *   key：vaue
         * }
         * function get(key){
         *    // 获取对应key的value值
         *    return value
         * }
         */
        map.set(num,count)
    }
    for(let [key,value] of map.entries){
        if(value === 1){
            return key
        }
    }
    return -1
};  
