// 如果取反类型？

type UnType<T, U> = T extends U ? never : T

function log<T>(a: UnType<T, string>) {
  
}

log('aaa')
log(123)