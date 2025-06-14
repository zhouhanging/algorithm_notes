// 构建上面的完全二叉树
import TreeNode from './TreeNode';

const root = new TreeNode("A");
root.left = new TreeNode("B");
root.right = new TreeNode("C");
root.left.left = new TreeNode("D");
root.left.right = new TreeNode("E");
root.left.left.left = new TreeNode("H");
root.left.left.right = new TreeNode("I");
root.left.right.left = new TreeNode("J");
root.left.right.right = new TreeNode("K");
root.right.left = new TreeNode("F");
root.right.right = new TreeNode("G");
root.right.left.left = new TreeNode("L");
root.right.left.right = new TreeNode("M");
root.right.right.left = new TreeNode("N");
root.right.right.right = new TreeNode("O");

export default root