import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from "../../data/productos.json";
import { ItemDetail } from '../itemdetail/ItemDetail';
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"

export const ItemDetailConainer = (props) => {

      const [producto,setProducto] = useState(null);
      const  {id} = useParams();

      useEffect(()=>{
            const promise = new Promise((resolve,reject) =>{
                 setTimeout(()=> {
                  const productoById = data.find(producto => producto.id === id)
                  resolve(productoById)
            }, 2000);
            })
            promise.then(data => setProducto(data));
      }, [])

      if(!producto) return  <div className='cargando'><h1>CARGANDO...<i class="bi bi-arrow-repeat"></i></h1></div>
      return (
      <Container className='mt-4'>
            <div className='detalleVino'>
            <h1>DETALLE</h1>
            </div>
            <ItemDetail producto={producto} />
      </Container>
      )
};