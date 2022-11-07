import React from 'react'
import '../App.css'
import '../index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ResidentsInfo = ({ imgChar }) => {
  return (
    <article>
      <div className='name-character'><p>{imgChar.name}</p></div>
      <img src={imgChar.image} alt="profile-image" className='img-character' />
      <div className='status-color'>
        <div className={`circle-status ${imgChar.status == "Alive" ? "color-alive" : "color-death"} ${imgChar.status == "unknown" ? "color-unknown" : ""}`} ></div>
        <div> <p>{imgChar.status}</p></div>
      </div>
      <div className="info-character">
        <p className="title-info"><b>Raze:</b> {imgChar?.species}</p>
        <p className="title-info"><b>Origin:</b>  {imgChar.origin?.name}</p>
        <p className="title-info"><b>Episodes where appear:</b> {imgChar.episode?.length}</p>
      </div>
    </article>
  );
};
export default ResidentsInfo;