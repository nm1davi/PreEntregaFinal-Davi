import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from "../../data/productos.json";
import { ItemList } from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";

export const ItemListConainer = (props) => {

      const [productos,setProductos] = useState([]);

      const{id}=useParams();
      


      useEffect(()=>{
            const promise = new Promise((resolve,reject) =>{
                 setTimeout(()=> resolve(data), 2000);
            })
            promise.then((data) =>{
                  if(!id){
                  setProductos(data);
                  } else {
                        const productosFiltrados =  data.filter((producto) => producto.categoria  === id);
                        setProductos(productosFiltrados);
                  }
            });
      }, [id]);

      return (
      <div className='contenedor'> 
                  <Container className='mt-4'>
                  <div className='tituloContenedor'>
                        <h2>BIENVENIDO A NUESTRA TIENDA <i className="bi bi-bag-plus-fill"></i></h2>
                  </div>
                  <div className='Cards'>
                        <ItemList  productos={productos} />
                  </div>
            </Container>
      </div>
      )
};