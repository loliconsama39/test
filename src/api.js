const API_KEY = ""
const API_DNS = ""

const categorias = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?API_KEY="+API_KEY+"&language=pt-br"
    },
    {
        name: "documentaries",
        title: "documentarios",
        path: "/discover/tv/API_KEY="+API_KEY+"&with_genres=99"
    }

]

const getmovies = (categoria) => {
    let url = ''

    categorias.forEach((iten) => {
        if(iten.name == categoria){
            url = API_DNS + iten.path
        }
    });

    return url;
}

export default getmovies;