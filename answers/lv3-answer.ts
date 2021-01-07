/**
 * 进入下一次业务迭代前，先做一些技术储备
 */


/**
 * 完善下面函数的类型，至少能表明输入和输出类型是一致的
 */
function sameTypeInputOutput<T extends number | string>(param: T): T {
  return param
}

const a = sameTypeInputOutput(1)

/**
 * 继续完善下面函数的类型
 */
function swap<T1, T2>(param1: T1, param2: T2): [T2, T1] {
  return [param2, param1]
}

const b = swap(1, 'a');

export default {}
