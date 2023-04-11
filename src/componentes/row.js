import React, { useEffect } from "react";
import {getMovies} from './api'

function Row([title,path]){
    const [movies,setMovies] = React.useState([]);
    
    const fetchMovies = async (_path) => {
        try{
            const data = await getMovies(_path);
            setMovies(data?.results)
            console.log(data)
        }catch(error) {
            console.log('ERROR row:', error)
        }
        
    }
    useEffect(()=>{
        fetchMovies(path)
    },[path]);
    return (
        <div className="Row-container">
            <h2 className="Row-header">{title}</h2>
            <div className="Row-cards">
                {movies?.map((movie) => {
                    return<img key={movie.id}>{movie.original_title}</img>
                })}
            </div>
        </div>
    )
}

export default Row;