import axios from 'axios';
import { useState, useEffect } from 'react'
//import result from '../resources/info.json'

export const Card = ()=>{
   
 
    const [products, setPosts] = useState([]);

    useEffect( ()=>{
        const apiFetch = ()=>{
            try {
                const answer =  axios.get('../resources/info.json');
                
                //const data = await answer.json();
              
                setPosts(answer);
                
                 
            } catch (error) {
                console.log(error);
            }
        }
        apiFetch();
    },[])
    
   
    
    return (
        <div className='container'>
            <div className='col'>

                <div className='row'>
                    <h1>PRODUCT</h1>
                </div>
                <div className='row'>
                    
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
                            {products.map((product)=>{
                                
                                <tr key={product.id}>
                                    <td>{ product.title}</td>
                                    <td>{ product.price}</td>
                                    <td>{ product.category}</td>
                                    <td><p>{ product.description}</p></td>
                                    <td><img src="..." className="card-img-top" alt="..."/>{product.image}</td>
                                </tr>
                            
                         
                            })}
                        </tbody>
                    </table>    

                </div>
            </div>
        </div>
    )
}