import { createActions } from 'redux-actions';

export const getType = (reduxAction) =>{
    return reduxAction().type;
};

export const getRoom = createActions({
    getRoomRequest:undefined,
    getRoomSuccess: (payload) => payload,
    getRoomFail: (err)=> err,
});