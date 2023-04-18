import React, {useEffect, useState} from 'react';
import './banner.css';
import {categorias, getmovies} from '../api';

function banner(){
    const[movie,setMovies]= useState({});

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categorias.find(
                (category)=>category.name === "netflixOriginals"
            )
            const data = await getmovies(netflixOriginalsCategory.path)
            const movies = data?.results
            const randomIndex = Math.floor(Math.random() * movies.length)
            setMovies(movies[randomIndex])

        } catch (error) {
            console.log('banner ',error)
        }
    }
    
    useEffect(() => {
        fetchRandomMovie()
    },[]);
        
    return(
        <header className='banner-container'
        style={{}}>

        </header>
    )
}

export default banner;