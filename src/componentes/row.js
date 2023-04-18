import React, { useEffect } from "react";
import {getMovies} from './api'
import './row.css'

const imagehost = "";

function Row([title,path,isLarge]){
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
                    return(<img 
                        className={`movie-card ${isLarge && "movie-card-large"}` } 
                        key={movie.id} 
                        src={imagehost + movie.poster_path} 
                        alt={movie.name}
                        ></img>);
                })}
            </div>
        </div>
    )
}

export default Row;