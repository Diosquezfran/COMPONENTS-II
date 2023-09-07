import React, { useState } from 'react'
import PresentationCard from './components/PresentationCard'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'

const App = () => {
  const [show, setShow] = useState(true)
  const data = {
    name: "Santiago",
    age: 25,
    details: {
      profession: "Programmer"
    },
    hobbies: ["Futbol", "videogames", "Music", "Mate"]
  }

  return (
    <div>
      {/* <------------- PROPS -------------> */}
      <PresentationCard
        name={data.name}
        age={data.age}
        details={data.details}
        hobbies={data.hobbies}
        saludar={() => alert(`Hola ${data.name}`)}
      />
      {/* <------------- USEREF -------------> */}

      <InputFocus />
      {/* <------------- USEEFFECT -------------> */}
      {
        show &&
        <Counter />
      }
      <button onClick={() => setShow(!show)}>Desmontar componente</button>
    </div>
  )
}

export default App