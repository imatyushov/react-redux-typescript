import {UserAction, UserActionTypes, UserState} from "../../types/user";

const defaultState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state=defaultState, action: UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {users: [], loading:true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {error: action.payload, loading: false, users: []}
        default:
            return state

    }

}