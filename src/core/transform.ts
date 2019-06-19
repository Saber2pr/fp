/*
 * @Author: saber2pr
 * @Date: 2019-06-19 21:54:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-19 22:12:35
 */
export type Y<T> = (f: Y<T>) => Y<T> | any
export const Y = <T>(f: Y<T>) => f(f)
