/**
 * 广度优先遍历
题目： 以横向的维度对树进行遍历，从第一个节点开始，依次遍历其所有的兄弟节点，再遍历第一个节点的子节点，一层层向下遍历
输入：
[
  {
    "id": 1,
    "title": "child1",
    "parentId": 0,
    "children": [
      {
        "id": 3,
        "title": "child1_1",
        "parentId": 1
      },
      {
        "id": 4,
        "title": "child1_2",
        "parentId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "child2",
    "parentId": 0,
    "children": [
      {
        "id": 5,
        "title": "child2_1",
        "parentId": 2
      }
    ]
  }
]

输出： [1, 2, 3, 4, 5]
 */


function rangeTree(tree) {
  if (Array.isArray(tree)) {
    let result = []
    let list = [...tree]
    let node

    while(node = list.shift()) {
      result.push(node.id)
      node.children && list.push(...node.children)
    }

    return result;
  }

  return new Error('tree is not Array')
}

const tree = [
  {
    "id": 1,
    "title": "child1",
    "parentId": 0,
    "children": [
      {
        "id": 3,
        "title": "child1_1",
        "parentId": 1
      },
      {
        "id": 4,
        "title": "child1_2",
        "parentId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "child2",
    "parentId": 0,
    "children": [
      {
        "id": 5,
        "title": "child2_1",
        "parentId": 2
      }
    ]
  }
]

console.log(rangeTree(tree))