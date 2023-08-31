import { useState } from "react";

const stock = 4;


export const ItemCounts = () => {
      
      const [count, setCount] = useState(1);

      const handleDecreaseCount = () => {
            if (count > 0 ) {
                  setCount((prev) => prev - 1)
            }
      };
      const handleIncreaseCount = () => {
            if (stock > count){
                  setCount((prev) => prev +1)
            }
      };
      const onAdd = () => {
            if (count > 1){
                  alert(count + " Productos agregados al carrito")
            }
            else alert(count + " Producto agregado al carrito")
      };


      return(
            <div className="ItemCount">
                  <span onClick={handleDecreaseCount}>-</span>
                  <span>{count}</span>
                  <span onClick={handleIncreaseCount}>+</span>
                  <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
      )
}

