import React from 'react'

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log('CHANGING')
    }

    return (
        <input type="text" value={props.value} onChange={props.handleChange} />
    )
}