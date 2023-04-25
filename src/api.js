const API_KEY = "264bb09ec4d858065cfb8860838a32ff"
const API_DNS = "https://api.themoviedb.org/3"

const categorias = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?API_KEY="+API_KEY+"&language=pt-br",
        isLarge: true
    },
    {
        name: "netflixOriginal",
        title: "Originais Netflix",
        path: "/discover/tv/week?API_KEY="+API_KEY+"&language=pt-br",
        isLarge: false
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated/API_KEY="+API_KEY+"&with_genres=99",
        isLarge: false
    },
    {
        name: "comedy",
        title: "Comedias",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99",
        isLarge: false
    },
    {
        name: "romances",
        title: "Romances",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99",
        isLarge: false
    },
    {
        name: "documentaries",
        title: "documentarios",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99",
        isLarge: false
    }
]

export const getmovies = async (path) => {
    try {
        let url = API_DNS + path
        const response = fetch(url)
        return (await response).json()
    } catch (error) {
        console.log("ERROR getMovies: ", error)
    }

}

