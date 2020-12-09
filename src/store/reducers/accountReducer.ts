import { IAccount } from '../models/account.interface';


interface IAction {
    type: string,
    [props: string]: any
}


const initialState = {
    user_id: null
}

function accountReducer(state: IAccount = initialState, action: IAction) {
    switch (action.type) {
        case "LOG_IN": {
            return { ...state, user_id: (action.payload.validateLoginSuccessData) }
        }
        case "LOG_OUT": {
            return { ...state, user_id: "" }
        }
        default:
            return state;
    }
}



export default accountReducer;
