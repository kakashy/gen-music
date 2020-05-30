import React from 'react';
import '../Main.css'

function MusicCard(props) { 
    return (
        <div className="musicCard">
        
        {console.log(props)}
             <img src={props.art} alt="cover"></img>
             <label className="songTitle">{props.title}</label>
             <label className="songArtist">{props.artist}</label>
        </div>
    )
 }
export default MusicCard