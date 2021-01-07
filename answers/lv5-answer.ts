
/**
 * 这是一个极简的 redux 用法。
 */

const store = {
  data: 1
}

const actions = {
  DATA_ADD(param: number): void {
    store.data += param;
  },
  GET_DATA_TO_STRING(): string {
    return store.data.toString();
  }
}

/**
 * 尝试补全 dispatch 的类型定义，使其能够提示 actionName 的候补，选中 actionName 后，param 和返回值得到正确的提示
 */


type ActionName = keyof typeof actions;

function dispatch<T extends ActionName>(actionName: T, param?: Parameters<(typeof actions)[T]>[0]): ReturnType<(typeof actions)[T]> {
  return actions[actionName](param) as ReturnType<(typeof actions)[T]>;
}

const dataString = dispatch('GET_DATA_TO_STRING');

export default {}