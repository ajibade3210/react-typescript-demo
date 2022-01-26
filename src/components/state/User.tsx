import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

/* Type influence */
/**
 * Type Assertion
 *Type assertion allows you to set the type of a value and tell the compiler
  not to infer it. This is when you, as a programmer, might have a better understanding
   of the type of a variable than what TypeScript can infer on its own. *

   Ways to do type assertion
   using 'as'
   or bracket <> syntax
 */
export const User = () => {
    // const [user, setUser]  = useState<AuthUser | null>(null)
    const [user, setUser]  = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Visss',
            email: 'anana@email.com',
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

