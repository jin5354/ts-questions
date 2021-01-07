/**
 * 后端为了可维护性，在数据结构中加入了 type 字段。
 * 新的业务需求出现了。你需要根据指定条件，在 persons 数组中过滤出指定的元素。
 */

interface User {
  type: 'user';
  name: string;
  age: number;
  gender: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  code: number;
}

type Person = User | Admin;

const persons: Person[] = [
  { name: '用户小红', type: 'user', age: 25, gender: '女' },
  { name: '用户小黄', type: 'user', age: 23, gender: '女' },
  { name: '用户小绿', type: 'user', age: 23, gender: '男' },
  { name: '用户小蓝', type: 'user', age: 26, gender: '男' },
  { name: '管理员 A', type: 'admin', age: 26, code: 0 },
  { name: '管理员 B', type: 'admin', age: 24, code: 1 },
]

/**
 * 这个函数可以根据 type 和指定属性过滤元素
 * 为 filterPersonsByRules 函数补全类型定义吧
 * 接收参数：persons 元素汇总数组，personType: 类型，可以为字符串 'user' 或 'admin', criteria 为规则，接收 object
 * 额外要求：criteria 规则中不要出现 type 字段，无用
 *
 */
function filterPersonsByRules(persons: unknown, personType: unknown, criteria: unknown): unknown {
  return persons
      .filter((person) => person.type === personType)
      .filter((person) => {
          let criteriaKeys = Object.keys(criteria);
          return criteriaKeys.every((fieldName) => {
              return person[fieldName] === criteria[fieldName];
          });
      });
}

const age23Users = filterPersonsByRules(persons, 'user', {
  age: 23
})

export default {}


