const root= require('./initNumTree');

var levelOrderTraverse = function(root) {
    if (root === null) {
        return;
    }
    let q = [];
    q.push(root);
    // 记录当前遍历到的层数（根节点视为第 1 层）
    let depth = 1;

    while (q.length !== 0) {
        let sz = q.length;
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            // 访问 cur 节点，同时知道它所在的层数
            console.log("depth = " + depth + ", val = " + cur.val);

            // 把 cur 的左右子节点加入队列
            if (cur.left !== null) {
                q.push(cur.left);
            }
            if (cur.right !== null) {
                q.push(cur.right);
            }
        }
        depth++;
    }
};
function State(node, depth) {
    this.node = node;
    this.depth = depth;
}
var levelOrderTraverse3 = function(root) {
    if (root === null) {
        return;
    }
    // @visualize bfs
    var q = [];
    // 根节点的路径权重和是 1
    q.push(new State(root, 1));

    while (q.length !== 0) {
        var cur = q.shift();
        // 访问 cur 节点，同时知道它的路径权重和
        console.log("depth = " + cur.depth + ", val = " + cur.node.val);

        // 把 cur 的左右子节点加入队列
        if (cur.node.left !== null) {
            q.push(new State(cur.node.left, cur.depth + 1));
        }
        if (cur.node.right !== null) {
            q.push(new State(cur.node.right, cur.depth + 1));
        }
    }
};
// DFS
function depthFirstSearch(root, target){
    console.log('root',root)
    if(root === null) return false;
    if(root.value === target) return true;
    const leftResult = depthFirstSearch(root.left, target);
    const rightResult = depthFirstSearch(root.right, target);
    return leftResult || rightResult;
}
// DFS
function breadthFirstSearch(root, target){
    if(root === null) return;
    const queue = []; // 用于存储每一层的节点
    queue.push(root);
    
    while(queue.length > 0){
      const node = queue.shift(); // 从队列里面拿出最前面的节点
      console.log(queue)
      if(node.value === target) return true;
      if(node.left !== null) queue.push(node.left);
      if(node.right !== null) queue.push(node.right);
    }
    return false;
  }


module.exports=breadthFirstSearch