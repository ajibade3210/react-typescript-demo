
/*  */
type GreetProps = {
    name: string,
    year?: number,
    isLoggedIn: boolean
}

export const Greet = ({name,year=2020,isLoggedIn}: GreetProps) => {
    return(
        <div>
            <h2>
            {isLoggedIn?
                `Welcome ${name} to SWE lifestyle in the year ${year}`
                : 'Welcome Guest'
            }
            </h2>

        </div>
    )
}