// 权限枚举 值对应二进制  方便位运算
enum permission {
  read = 1,   // 2 ^ 0  0001
  write = 2,  // 2 ^ 1  0010
  create = 4, // 2 ^ 2  0100
  delete = 8  // 2 ^ 3  1000
}

// 或位运算符 (创建一个有读写权限的变量)
//        0001
//        0010
// 结果为  0011
let readAndWrite: permission = permission.read | permission.write

// 与位运算符 (判断是否有某个权限)
//        0011
//        0001
// 结果为  0001
let hasPermission = (value: permission, per: permission) : Boolean => {
  return (value & per) === per
}
console.log(hasPermission(readAndWrite, permission.read))
console.log(readAndWrite)

// 异或位运算符 (删除某个权限)
//        0011
//        0010
// 结果为  0001
let read = readAndWrite ^ permission.write
console.log(hasPermission(read, permission.write))