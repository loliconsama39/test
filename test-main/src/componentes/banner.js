import React, {useEffect, useState} from 'react';
import './banner.css';
import {categorias, getmovies} from '../api';

function Banner(){
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
        
    let truncate = (str, n) => {
        return str?.length > n ? str?.substr(0, n-1) + '...' : str;
    };

    return(
        <header className='banner-container'
        style={{
            backgroundSize:'cover',
            backgroundImage:'url("${}")',
            roundPosition:'center-center'
            }}>
        
        <div className='banner_content'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner-button'>
                assistir
            </div>
            <div className='banner-button'>
                minha lista
            </div>
            <div className='banner_description'>
                <h2> {truncate(movie?.overview, 100)} </h2>
            </div>
        </div>
        </header>
    )
}

export default Banner;