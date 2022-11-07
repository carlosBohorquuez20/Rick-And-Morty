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