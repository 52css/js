// void
function fn(): void {

}

// 定义元组
let tuple1: [string, number] = ["a", 1];
let tuple2 = ["a", 1];

tuple1[0] = true
tuple2[0] = 13

// 接口

// 定义枚举
enum Color {
  red,
  green = 'rgba(0, 255, 0, 1)',
}

console.log(Color.red)
console.log(Color.green)
// 函数重载
// type
// 泛型
// 联合类型 和 交叉类型
// 类型断言
// keyof
// Readonly
// Partial\ Omit \ Pick \ Extends \ Exclude \ Extract \ NonNullable \ Parameters \ ConstructorParameters \ ReturnType \ InstanceType \ ThisParameterType \ OmitThisParameter \ ThisType