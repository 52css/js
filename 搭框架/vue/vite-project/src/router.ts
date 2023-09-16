import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routeFiles = import.meta.glob('@/views/**/*.vue')
const autoRoutes: RouteRecordRaw[] = []
const fileNameReplace = (fileName: string) =>
  fileName.replace(/\[([\w\-_]*)\]/g, (_, w) => ':' + w)
export interface PathToChildren {
  [key: string]: RouteRecordRaw[]
}
const pathToChildren: PathToChildren = {}

for (const filePath in routeFiles) {
  const result = filePath.slice(11, -4)
  const fileNameList = result.split('/')
  const fileNameLen = fileNameList.length
  let relativePath = ''
  let routersParent = autoRoutes
  const children: RouteRecordRaw[] = []
  const path = fileNameList.map((x) => fileNameReplace(x)).join('/')

  for (let i = 0; i < fileNameLen; i++) {
    const rightIndex = fileNameLen - 1 - i
    const left = fileNameList
      .slice(0, rightIndex)
      .map((x) => fileNameReplace(x))
      .join('/')
    const fileName = fileNameReplace(fileNameList[rightIndex])

    if (i === 0) {
      relativePath = fileName
    } else {
      relativePath = fileName + '/' + relativePath
    }

    if (i === fileNameList.length - 1) {
      relativePath = '/' + relativePath
    }

    if (routeFiles['/src/views/' + left + '.vue']) {
      routersParent = pathToChildren[left]
      break
    }
  }

  pathToChildren[path] = children

  routersParent.push({
    path: relativePath,
    component: routeFiles[filePath],
    children
  })
}

// 增加重定向
interface RedirectMap {
  [key: string]: string
}
const redirectMap: RedirectMap = {
  '/': '/index'
}

Object.keys(redirectMap).forEach((path) => {
  const redirect = redirectMap[path]
  autoRoutes.push({
    path,
    redirect
  })
})

const router = createRouter({
  history: createWebHistory(),
  routes: autoRoutes
})

export default router
