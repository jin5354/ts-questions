/**
 * 随着业务迭代，用户的格式出现了2种！假设新出现了一种 Admin 类型用户，数据结构与 User 不同。
 * 请为 persons 变量提供合适的类型。
 */

const persons: unknown = [
  { name: '用户小红', age: 25, gender: '女' },
  { name: '用户小黄', age: 23, gender: '女' },
  { name: '用户小绿', age: 23, gender: '男' },
  { name: '用户小蓝', age: 26, gender: '男' },
  { name: '管理员 A', age: 26, code: 0 },
  { name: '管理员 B', age: 24, code: 1 },
]

/**
 * 这里有一个工具函数，期望打印 person 信息。
 * 需要自动识别，对于 User 打印出 gender，对于 Admin 打印出 code。
 */
function logPerson(person: unknown) {
  console.log(person.name, person.type, person.age)
  console.log(person.gender ? person.gender : person.code)
}

persons.forEach(logPerson);

export default {}
