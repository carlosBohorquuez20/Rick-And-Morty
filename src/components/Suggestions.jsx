import React from 'react'
import '../App.css'

const Suggestions = ({ suggestions, setSuggestions, LocationSelect }) => {

  return (
    <div className='container-suggestion'>
      {suggestions.map(suggestion => {
        return (
          <div key={suggestion.id} className="suggestion">
            <div onClick={() => {
              LocationSelect(suggestion.url)
              setSuggestions([])
            }}>
              {suggestion.name}, Residents:{suggestion?.residents.length}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Suggestions