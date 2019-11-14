import { AnyAction } from "redux";
import { typeADD } from './action'

const initState = {
    count: 1
}

/**
 * @description reducer结构
 */
export default (state = initState, action: AnyAction): typeof initState => {
    switch(action.type) {
        case typeADD: {
            return {
                ...state,
                count: action.payload + 1
            }
        }
            default: return state;
    }
}