import React,{ useState,  } from 'react';

const Productoform = (props) => {

    const {initialTitle, initialPrice,initialDescription,onSubmitProp,initialImage}= props;
    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description,setDescription] = useState(initialDescription);
    const [image,setImage] = useState(initialImage);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description,image});
    };
    
          

    return (
        <div>
            <form onSubmit={onSubmitHandler} >
                <div className='group'>
                    <label>Title :</label><br/>
                    <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='group'>
                    <label>Price :</label><br/>
                    <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
                </div>
                <div className='group'>
                    <label>Description :</label><br/>
                    <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                </div>
                <div className='group'>
                    <label>Imagen opcional : </label><br/>
                    <input type="file" value={image} onChange = {(e)=>setImage(e.target.value)}/>
                </div>
                <button type="submit">Enviar Formulario</button>
            </form>

            
        </div>
    );
}

export default Productoform;
