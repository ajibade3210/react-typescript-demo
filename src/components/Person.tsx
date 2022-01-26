import {personName} from './Person.types'

export const Person = (props: personName) => {
    return(
         <div>
             {props.name.first}
             {" "}
             {props.name.last}
         </div>
         )
}