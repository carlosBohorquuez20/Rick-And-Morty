import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import ResidentsInfo from './ResidentsInfo';
import '../App.css'
const CharItems = ({ url }) => {
  const [imgChar, setImgeChar] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setImgeChar(res.data))
  }, [])

  return (

    <li className='detail-character'>
      <ResidentsInfo imgChar={imgChar} />
    </li>
  );
};

export default CharItems;

/** {imgChar.name}
        <img src={imgChar.image} alt="" />
        <div className='status-color'>
        <div className='circle-status greem red'></div>
        <h1>{imgChar.status}</h1>
        </div>
        
        <p className="title-info">raze</p>
        <p className="title-data">{imgChar?.species}</p>
        <p className="title-info">origin</p>
        <p className="title-data">{imgChar.origin?.name}</p>
        <p className="title-info">episodes where appear</p>
        <p className="title-data">{imgChar.episode?.length}</p> */