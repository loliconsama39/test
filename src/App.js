import './App.css';
//import { useEffect } from 'react';
import {categorias} from '/.api';
import Row from './componentes/row.js';
import Nav from './componentes/nav';
import Banner from './componentes/banner';

function App() {

//  useEffect(() => {
//    let movies = getmovies(categories[0].path)
//
//      movies.then((data) => {
//        console.log(data)
//      })
//  })
  
  return (
    <div className="App">
        {/*navbar*/}
        {/*destaque*/}
        {/*em alta*/}
        <Nav></Nav>
        <Banner></Banner>
        {categorias.map((category) => {
          return <Row key = {category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>
        })}
    </div>
  );
}

export default App;
