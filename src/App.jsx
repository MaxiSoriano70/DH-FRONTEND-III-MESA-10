import { useEffect, useState } from 'react';
import Producto from './components/Producto';
import axios from 'axios';

function App() {
  const [cargando, setCargando] = useState(true);
  const url = "https://fakestoreapi.com/products?limit=10";
  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    axios(url)
      .then((res) => {
        console.log(res.data);
        setProductos(res.data);
        setTimeout(() => {
          setCargando(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container is-fluid is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
      {cargando ? (
        <>
          <h2 className='is-size-1'>Cargando...</h2>
          <progress className="progress is-large is-info" max="100">60%</progress>
        </>
      ) : (
        <>
          <h2 className='is-size-1'>PRODUCTOS</h2>
          <div className="container is-fluid is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-space-around">
            {productos.map((producto) => (
              <Producto
                key={producto.id}
                id={producto.id}
                titulo={producto.title}
                imagen={producto.image}
                descripcion={producto.description}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
