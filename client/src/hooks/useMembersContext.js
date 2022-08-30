import { MembersContext } from "../context/MemberContext";
import { useContext } from "react";

export const useMembersContext = () => {
    const context = useContext(MembersContext)


    if(!context) {
        throw Error('error')
    }
    return context 
}