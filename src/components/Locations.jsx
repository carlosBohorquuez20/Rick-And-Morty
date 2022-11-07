import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';
import Page from './Page';
import '../App.css'

const Locations = () => {
  const [character, setCharacter] = useState({});
  const [Id, setId] = useState('');
  const [page, setPage] = useState({});
  const randomId = Math.floor(Math.random() * 126) + 1;
  let api = `https://rickandmortyapi.com/api/location`

  useEffect(() => {
    axios
      .get(`${api}/${randomId}`)
      .then((res) => setCharacter(res.data));
    axios.get(`${api}?/page=1`).then(res => setPage(res.data.results))
  }, []);

  const change = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${Id}`)
      .then((res) => setCharacter(res.data));
  }

  const Search = (e) => {
    axios
      .get(`${api}/${e}`)
      .then((res) => setCharacter(res.data))
  }

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className='container-search'>
        <div className='inter'>
          <input
            type="text"
            value={Id}
            onChange={e => setId(e.target.value)} />
          <button onClick={change}>Search/Id</button>
        </div>
        <div className='list-search'>
          {Id && page.map((p) => (
            <Page key={p?.name} Search={Search} p={p} Id={Id} />
          ))}
        </div>
      </div>
      <h2 className='title'>{character?.name}</h2>
      <h2>type: {character.type}</h2>
      <h2>dimension: {character.dimension}</h2>
      <h2>population: {character.residents?.length}</h2>
      <ul className='ul-list'>
        {character.residents?.map((residents) => (
          <ResidentInfo key={residents} resident={residents} />
        ))}
      </ul>
    </>
  );
};

export default Locations;