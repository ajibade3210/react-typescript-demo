export type Name = {
    first: string,
    last: string
}


export type personName ={
    name : Name
}

/* Specific type array of objects */
export type PersonListProps = {
    names: Name[]
}