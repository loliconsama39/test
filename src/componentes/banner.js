import React, {useEffect, useState} from 'react';
import './banner.css';
import {categorias, getmovies} from '../api';

function banner(){
    const[movie,setMovies]= useState({});

    const fetchRandomMovie = async (_path) => {
        try {
            const netflixOriginalsCategory = categorias.find(
                (category)=>category.name === "netflixOriginals"
            )
            const data = await getmovies(netflixOriginalsCategory.path)
        } catch (error) {
            console.log('banner ',error)
        }
    }
    
    useEffect(() => {

    },[]);
        
    return(
        <></>
    )
}

export default banner;