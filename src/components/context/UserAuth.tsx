import {useContext} from "react"
import {UserContext} from "./UserContext"

export const UserAuth = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: 'Ajibadde',
                email: 'Ajibadde@email.com',
            })
        }
    }
    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleLogin}>LoggerIn</button>
            <div>User name {userContext?.user?.name}</div>
            <div>User name is {userContext?.user?.email}</div>
        </div>
    )
}