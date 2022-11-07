import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import CharItems from './components/CharItems'
import Pagination from './components/Pagination'
import logoName from './img/logo.png'
import Footer from './components/Footer'
import Header from './components/Header'
import Suggestions from './components/Suggestions'

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


  const lastPostIndex = currentPage * postPage
  const firstPostIndex = lastPostIndex - postPage
  const currentpost = locations?.residents?.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="App">
      <div className='container'>
      </div>
      <Header logoName={logoName} />
      <div className='top-input'>
        <h1>{locations.name}</h1>
        <div className='info-planets'>
          <p><b> Dimension:</b> {locations.dimension} |</p>
          <p><b> Residents:</b> {locations.residents?.length} |</p>
          <p><b>Type:</b>  {locations.type}</p>
        </div>
        <input type="text" placeholder='Insert location' name='select' value={select} onChange={onChange} />
        <Suggestions suggestions={suggestions} setSuggestions={setSuggestions} LocationSelect={LocationSelect} />
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
        <Footer />
      </footer>
    </div>
  )
}
export default App
