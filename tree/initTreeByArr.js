
import TreeNode from './TreeNode';
export default function buildTree(arr) {
	// 若没有参数或数组长度为0，则视为空树
    if (!arr || arr.length === 0) {
        return null;
    }
    // 先将数组第一个元素 设置为根结点
    let root = new TreeNode(arr.shift());
    // 节点队列 陆续从数组中为节点添加左右叶子
    let nodeQueue = [root];
    // 当数组剩余仍有元素，则持续为最近的节点添加叶子
    while (arr.length > 0) {
        // 从节点数组头部取出节点 为了添加叶子备用
        let node = nodeQueue.shift();
        // 若数组中无元素，则视为无叶子可添加,返回即可
        if (!arr.length) {
            break;
        }
        // 先从节点数组中取一个元素 转化为节点 拼接为左叶子
        let left = new TreeNode(arr.shift());
        node.left = left;
        nodeQueue.push(left);
        // 每拼接一片叶子节点 重新判断剩余叶子数量 若无剩余视为拼接完毕
        if (!arr.length) {
            break;
        }
        // 左侧叶子拼完，右边一样的操作
        let right = new TreeNode(arr.shift());
        node.right = right;
        nodeQueue.push(right);
    }
    // 最后返回根结点，通过根结点就能得到整个二叉树的结构
    return root;
}
