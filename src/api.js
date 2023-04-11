const API_KEY = ""
const API_DNS = ""

const categorias = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?API_KEY="+API_KEY+"&language=pt-br"
    },
    {
        name: "netflixOriginal",
        title: "Originais Netflix",
        path: "/discover/tv/week?API_KEY="+API_KEY+"&language=pt-br"
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated/API_KEY="+API_KEY+"&with_genres=99"
    },
    {
        name: "comedy",
        title: "Comedias",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99"
    },
    {
        name: "romances",
        title: "Romances",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99"
    },
    {
        name: "documentaries",
        title: "documentarios",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99"
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

