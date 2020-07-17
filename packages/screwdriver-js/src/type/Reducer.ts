/**
 * 二元累加函数
 * 
 * @template A 累加器、初始值及输出类型
 * @template B 被累加的值类型
 * 
 * @param acc 累加器值
 * @param item 被累加值
 * 
 * @category 函数类型
 */
export interface Reducer<B, A> extends Function {
  (acc: B, item: A): B
}