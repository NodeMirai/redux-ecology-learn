import { AnyAction } from "redux";

/**
 * @description action函数结构
 * 1. Action：仅存在type的基础类型，提供其他action类型继承
 * 2. AnyAction：包含type的类型，是我们平时常用的action
 * 3. AsyncAction：any类型
 */
export const typeADD = 'ADD'

export const countAdd = (payload: number): AnyAction => ({
    type: typeADD,
    payload
});