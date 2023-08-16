/**
 * 二叉查找树
题目： 判断一个数组，是否为某二叉查找树的前序遍历结果，二叉查找树特点是所有的左节点比父节点的值小，所有的右节点比父节点的值大

输入： [5, 3, 2, 1, 4, 6, 7, 8, 9]

输出： true

 */

function preOrderOfBST(list) {
  if (Array.isArray(list)) {
    const root = list[0]
    for (var i = 0; i < list.length; i++) {
      if (list[i] > root) {
        break;
      }
    }
    for (let j = i; j < list.length; j++) {
      if (list[j] < root) {
        return false;
      }
    }
    let left = true;
    let right = true;

    if (i > 1) {
      left = preOrderOfBST(list.slice(1, i));
    }

    if (i < list.length) {
      right = preOrderOfBST(list.slice(i));
    }

    return left && right;
  }

  return false;
}

console.log(preOrderOfBST([5, 3, 2, 1, 4, 6, 7, 8, 9]));
