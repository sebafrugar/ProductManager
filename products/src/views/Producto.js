import React, { useState, useEffect } from "react";
import { llamadaApi } from '../actions/llamadaApi';
import Productoform from "../components/ProductoForm";
import { Card } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Producto = () => {

    const [productos,setProductos] = useState();

    const getProductos = async () => {
        const response = await llamadaApi("http://localhost:8000/api/productos")
        console.log(response);
        setProductos(response.productos)
    }


    useEffect(() => {
        getProductos();
    },[])


    const crearProducto = (producto) => {

        fetch("http://localhost:8000/api/productos/new",{
            method:"POST",
            body:JSON.stringify(producto),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log("producto creado")
            //getProductos()
            setProductos([...productos,res.producto])
            //console.log(productos);
            console.log(res)
        })
    }

    const eliminarProducto = (idProducto) => {
        fetch('http://localhost:8000/api/productos/delete/'+idProducto,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then((res) => {
            getProductos();
        })
    }
    

  return (
    <div>
      <Productoform initialTitle="" initialPrice="" initialDescription="" onSubmitProp={crearProducto} initialImage={null}> </Productoform>
      {productos?.map((producto,i)=> {
          return(
            <div key={i} className={"asd"}> 
                <Card size="small" title={producto.title} extra={<Link to={"producto/"+producto._id} > Detalle </Link>} style={{ width: 300 }}>
                    <p>{producto.price}</p>
                    <p>{producto.description}</p>
                    <button onClick={()=> eliminarProducto(producto._id)}>Eliminar Producto</button>
                </Card>
            </div>
             
          )
          })}
    </div>
  );
};

export default Producto;
