import {useRef, useEffect} from 'react'

export const DomRef = () => {
    /* Intial value in useref is stored here */
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=> {
        inputRef.current?.focus()
    },[])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
    }