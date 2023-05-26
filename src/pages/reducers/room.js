import {INIT_STATE} from "../../action/roomlist/constant";
import {getRoom, getType} from "../../action/roomlist/action"

export default function roomReducers(state = INIT_STATE.room,action){
    switch(action.type){
        case getType(getRoom.getRoomRequest):
            return{
                ...state,
                isLoading: true,
            }
        case getType(getRoom.getRoomSuccess):
            return{
                ...state,
                isLoading: false,
                data:action.payload,
            }
        case getType(getRoom.getRoomFail):
        return{
            ...state,
            isLoading: false,
        }
        default:
            return state;

    }
}