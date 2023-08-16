/**
 * 树形结构查找节点
题目： 查找树形结构中符合要求的节点
输入：
tree: [
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
func： data => data.title === "child2_1"

输出：{ id: 5, parentId: 2, title: "child2_1" }
 */

function findTreeNode(tree, func) {
  for (let data of tree) {
    if (func(data)) return data
    if (data.children) {
      const res = findTreeNode(data.children, func)

      if (res) {
        return res
      }
    }
  }
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

console.log(findTreeNode(tree, data => data.title === "child2_1"))