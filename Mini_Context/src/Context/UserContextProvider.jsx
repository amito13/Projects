import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,Setuser] = useState(null)
    return(
       <UserContext.Provider value={{user,Setuser}}>
            {children}

       </UserContext.Provider>
    )

}   

export default UserContextProvider  


// import React from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({children}) => {
//         const [user, setUser] = React.useState(null)
//         return(
//             <UserContext.Provider value={{user, setUser}}>
//             {children}
//             </UserContext.Provider>
//         )
// }

// export default UserContextProvider