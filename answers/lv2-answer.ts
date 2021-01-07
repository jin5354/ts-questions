/**
 * 随着业务迭代，用户的格式出现了2种！假设新出现了一种 Admin 类型用户，数据结构与 User 不同。
 * 请为 persons 变量提供合适的类型。
 */

interface User {
  name: string;
  age: number;
  gender: string;
}

interface Admin {
  name: string;
  age: number;
  code: number;
}

type Person = User | Admin;

const persons: Person[] = [
  { name: '用户小红', age: 25, gender: '女' },
  { name: '用户小黄', age: 23, gender: '女' },
  { name: '用户小绿', age: 23, gender: '男' },
  { name: '用户小蓝', age: 26, gender: '男' },
  { name: '管理员 A', age: 26, code: 0 },
  { name: '管理员 B', age: 24, code: 1 },
]

/**
 * 这里有一个工具函数，期望打印 person 信息。
 * 需要要动识别，对于 User 打印出 gender，对于 Admin 打印出 code。
 */
function logPerson(person: Person) {
  console.log(person.name, person.age)
  console.log('gender' in person ? person.gender : person.code)
}

persons.forEach(logPerson);

export default {}






function isUser(person: Person): person is User {
  return 'gender' in person;
}

function isAdmin(person: Person): person is Admin {
  return 'admin' in person;
}

function betterLogPerson(person: Person) {
  console.log(person.name, person.age)
  if(isUser(person)) {
    console.log(person.gender)
  }else if(isAdmin(person)) {
    console.log(person.code)
  }
}