import React from 'react'

const CharactersList = ({ characters, nextPage, prevPage, page }) => {
  return (
    <div className='row'>
        <p>page number: {page}</p>
        <button onClick={nextPage}>Next page</button>
        <button onClick={prevPage}>Prev page</button>
        {
            characters.map((character) => (
                <div className='col-6 col-md-4' key={character.id}>
                    <div className="card">
                    <img src={character.image} alt={character.name}  className='card-img-top'/>
                    <h5 className='card-title'>{character.name}</h5>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CharactersList