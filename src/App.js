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
          return <Row/>
        })}
    </div>
  );
}

export default App;
