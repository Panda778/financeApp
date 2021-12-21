const { createContext } = require("react");

export const UserContext = createContext()


export const UserProvider = ({props}) => {
    return (
        <UserContext.Provider value={[]}>
            {props.children}
        </UserContext.Provider>
    )
}