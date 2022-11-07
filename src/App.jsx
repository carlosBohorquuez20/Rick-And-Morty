import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import CharItems from './components/CharItems'
import Pagination from './components/Pagination'
import logoName from './img/logo.png'

function App() {

  const [locations, setLocations] = useState([])
  const [select, setSelect] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [postPage, setPostPage] = useState(8);
  const [suggestions, setSuggestions] = useState([])
  const randomLocation = Math.floor(Math.random() * 126)



  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setLocations(res.data))
  }, [])

  const searchType = (() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${select}`)
      .then(res => { setSuggestions(res.data.results) })
  })

  const LocationSelect = (url) => {
    axios
      .get(url)
      .then(res => { setLocations(res.data) })
  }
  const onChange = (e) => {
    setSelect(e.target.value)
    searchType()
  }
  console.log(locations)
  //console.log(locations?.residents?.length)
  //console.log(postPage)
  const lastPostIndex = currentPage * postPage
  const firstPostIndex = lastPostIndex - postPage
  const currentpost = locations?.residents?.slice(firstPostIndex, lastPostIndex)
  return (
    <div className="App">
      <div className='container'>
      </div>
        <div className='background-top'>
          <img src={logoName} alt="banner" className='banner-name' />
        </div> 
      <div className='top-input'>
        <h1>{locations.name}</h1>
        <div className='info-planets'>
          <p><b> Dimension:</b> {locations.dimension} |</p>
          <p><b> Residents:</b> {locations.residents?.length} |</p>
          <p><b>Type:</b>  {locations.type}</p>
        </div>
        <input type="text" placeholder='Insert location' name='select' value={select} onChange={onChange} />
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
      </div>
      <ul className='list-character'>
        {currentpost?.map((char) => (
          <CharItems url={char} key={char} />
        ))}
      </ul>
      <Pagination totalPosts={locations?.residents?.length}
        postPage={postPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />

      <footer>
        <div>
          <h3>Developers:</h3>
          <p>Ludy</p>
          <p>Carlos Bohorquez Parra</p>
        </div>
      </footer>
    </div>

  )
}
/** <Locations locations={currentpost}/> */
export default App
