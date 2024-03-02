function create() {
  if (Math.random() > 0.5) {
    return {}
  }

  return []
}

const obj = create()

// 如何获取一个函数的构造函数名称
console.log(obj.__proto__.constructor.name)