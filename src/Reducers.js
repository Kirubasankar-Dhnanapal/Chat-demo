
const Reducers = (state,action) => {
    switch(action.type){
        case 'Name' : return {
            Messages : action.Messages,
            ...state
        }
        default : return {
            state
        }
    }
}

export default Reducers;