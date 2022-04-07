import React, {useState,useEffect} from 'react';
import { useNavigate, useParams,Link, Navigate } from "react-router-dom";
import { llamadaApi } from '../actions/llamadaApi';


const Detalleproducto = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [producto,setProducto] = useState();

    const getProducto = async() => {
        const response = await llamadaApi("http://localhost:8000/api/producto/" + id);
        console.log(response.producto)
        setProducto(response.producto)
    }

    useEffect(() => {
        getProducto();
    },[])


    return (
        <div>
            <h1>Detalle de producto :</h1>
            <h3>Title : {producto?.title}</h3>
            <h3>Price : {producto?.price}</h3>
            <h3>Description : {producto?.description}</h3>
            <button onClick={() => navigate("/")}>Volver al home </button>
        </div>
    );
}

export default Detalleproducto;
