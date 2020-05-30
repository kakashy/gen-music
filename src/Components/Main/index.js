import React from 'react'
import AlbArt from '../Images/nasa-U2uKrI4lci8-unsplash.jpg'
import './Main.css'
import MusicCard from './musicCard'

function Main() {
    return(
        <div className="main">
            <MusicCard
                art={AlbArt}
                title="Bumba"
                artist="Voi"
            />
            <MusicCard
                art={AlbArt}
                title="Mita"
                artist="Nox"
             />
        </div>
    )
}
export default Main