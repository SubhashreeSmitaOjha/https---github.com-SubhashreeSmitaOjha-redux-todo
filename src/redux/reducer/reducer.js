const Initial_State={
    User_data : []

}
export const Todoreducer=(state=Initial_State,action)=>{
    switch(action.type){
        case 'ADD' :
            return {
                ...state,
                User_data:[state.User_data,action.payload]
            }
    }
}