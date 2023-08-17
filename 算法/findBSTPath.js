/**
 * 查找二叉树的路径
题目： 查找二叉树和为某一值的路径

输入：
{
  data: 5,
  left: {
    data: 3,
    left: {
      data: 2,
      left: {
        data: 1
      }
    },
    right: {
      data: 4
    }
  },
  right: {
    data: 6,
    right: {
      data: 7,
      right: {
        data: 8,
        right: {
          data: 9
        }
      }
    }
  }
}



输出： [[5, 3, 2, 1], [5, 6]]
 */

function findBSTPath(node, num, stack = [], sum = 0, result = []) {
  stack.push(node.data);
  sum += node.data;

  if (num === sum) {
    result.push(stack.slice());
  }

  if (node.left) {
    findBSTPath(node.left, num, stack, sum, result);
  }

  if (node.right) {
    findBSTPath(node.right, num, stack, sum, result);
  }

  stack.pop();

  return result;
}

const node = {
  data: 5,
  left: {
    data: 3,
    left: {
      data: 2,
      left: {
        data: 1
      }
    },
    right: {
      data: 4
    }
  },
  right: {
    data: 6,
    right: {
      data: 7,
      right: {
        data: 8,
        right: {
          data: 9
        }
      }
    }
  }
}
console.log(findBSTPath(node, 11))