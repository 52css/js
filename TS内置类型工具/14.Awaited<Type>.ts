type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number

// 假如这是一个第三方库，User没有导出，fetchUser函数导出了
interface User {
	name: string
	age: number
}
export async function fetchUser(): Promise<User> {
	const data = await fetch('https://www.example.com/user').then(res => {
		return res.json()
	})
	return data
}

// 我们开发中在获取到了User类型
type UserFetch = Awaited<ReturnType<typeof fetchUser>>

async function getUserInfo() {
  let user: UserFetch = { name: 'ming', age: 30 }
  return user
}

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never