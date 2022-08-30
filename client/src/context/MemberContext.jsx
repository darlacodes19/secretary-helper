import { createContext, useReducer} from "react";


export const MembersContext = createContext()

export const membersReducer = (state, action ) => {
    switch(action.type) {
        case 'SET_MEMBERS':
            return {
                members: action.payload
            }
        case 'CREATE_Member':
            return {
                members: [action.payload, ...state.members]
            }
            default: 
            return state
        }
}

export const MembersContextProvider = ({children}) => {

    //usereducer 

    const [state, dispatch] = useReducer(membersReducer , {
        members: null
    }) 

   
    return (
        <MembersContext.Provider value={{...state, dispatch}} > 
            {children}
        </MembersContext.Provider>
    )
}