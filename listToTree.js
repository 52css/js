/**
 * 列表转成树
题目： 输入一组列表如下，转化成树形结构
输入：
[
  { id: 1, title: "child1", parentId: 0 },
  { id: 2, title: "child2", parentId: 0 },
  { id: 3, title: "child1_1", parentId: 1 },
  { id: 4, title: "child1_2", parentId: 1 },
  { id: 5, title: "child2_1", parentId: 2 }
]
输出：
tree = [
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
 */

function listToTree(data) {
  if (Array.isArray(data)) {
    const map = data.reduce((prev, item) => {
      prev[item.id] = item
      return prev
    }, {})
    const result = []

    for (let id in map) {
      const item = map[id]

      if (item.parentId) {
        // 去寻找对应的父级，给父children 插入 item
        if (!map[item.parentId].children) {
          map[item.parentId].children = []
        }
        map[item.parentId].children.push(item)
      } else {
        result.push(item)
      }
    }

    return result
  }

  return new Error('data is not Array')
}

const list = [
  { id: 1, title: "child1", parentId: 0 },
  { id: 2, title: "child2", parentId: 0 },
  { id: 3, title: "child1_1", parentId: 1 },
  { id: 4, title: "child1_2", parentId: 1 },
  { id: 5, title: "child2_1", parentId: 2 }
]
console.log(JSON.stringify(listToTree(list), null, 2))