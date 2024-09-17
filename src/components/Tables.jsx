import axios from 'axios';
import {useEffect, useState} from 'react'


export const Table = ()=>{

    const [products, setPosts] = useState([]);

    useEffect( ()=>{
        const apiFetch = async ()=>{
            try {
                //const answer = await fetch('http://127.0.0.1:8000/api/v1/products');
                const answer = await axios.get('http://127.0.0.1:8000/api/v1/products');
                //const data = await answer.json();
                console.log(answer)
                setPosts(answer);
                
                 
            } catch (error) {
                console.log(error);
            }
        }
        apiFetch();
    },[])


    return(
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
                {products?.map((product)=>(
                    <tr key={product.id}>
                     <td>{ product.title}</td>
                     <td>{ product.price}</td>
                     <td>{ product.category}</td>
                     <td><p>{ product.description}</p></td>
                     <td><img src={product.image} alt="" /></td>
                    </tr>
                ))}
            </tbody>
        </table> 
    )
}