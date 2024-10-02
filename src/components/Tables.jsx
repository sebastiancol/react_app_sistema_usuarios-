
import { useEffect, useState} from 'react'

export const Table = ()=>{

    const [products,setProducts] = useState([]);
   
    useEffect(()=>{
        const apiFetch = async ()=>{
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/products');
                const data = await response.json();
                //console.log(data);
                setProducts([...data])
            } catch (error) {
                console.log(error);
            }
        } 
        apiFetch();
    },[])
   
    return(

        <div className='containerb'>
            <h1>Tabla de productos</h1>
            <table className="table text-center text-uppercase table-bordered 2">
                <thead className="table table-header" >
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Imagen</th> 
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                        <td>{ product.title}</td>
                        <td>{ product.price}</td>
                        <td>{ product.category}</td>
                        <td><p>{ product.descriptions}</p></td>
                        <td><img src={product.image} alt="imagen" width="150px" height="200px" /></td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
        
    )
};