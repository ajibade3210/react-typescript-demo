import { useState } from "react"


export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
        </div>
    )
}

/**
 * STEP  1 - import useState Hook
 *
 * STEP  2 - create login state var which intial value is false
 *
 * STEP  3 - condition render the text inside the div using ternary operator
 *
 * STEP  4 - define the handle functions
 *
 * You dont need to write a single line of type script vode fot useState hook, typescript influence infers the
 * typeof our value using the intial value
 * half the time you dont need to type the type of usestate hooks
 */