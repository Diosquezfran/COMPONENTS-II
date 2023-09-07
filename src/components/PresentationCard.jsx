import React from 'react'
import Button from './Button'

const PresentationCard = ({ name, age, details, hobbies, saludar }) => {
    return (
    <div>
        <h2>Name: {  name }</h2>
        <p>Age: { age }</p>
        <p>Profession: { details.profession }</p>
        <ul>
           { hobbies.map((hobbie, index) => (
            <li key={index}> { hobbie }</li>
           ))}
        </ul>
        <Button cb={saludar} > 
            {/* CHILDREN  */}
           <p>Hola</p>   
        </Button> 
    </div>
  )
}

export default PresentationCard