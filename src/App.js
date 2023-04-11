import './App.css';
//import { useEffect } from 'react';
import {categorias} from '/.api';
import Row from './componentes/row';

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
        {categorias.map((category) => {
          return <Row key = {category.name} title={category.title} path={category.path}/>
        })}
    </div>
  );
}

export default App;
