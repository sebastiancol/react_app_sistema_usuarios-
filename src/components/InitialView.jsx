import {Link} from 'react-router-dom'
import {} from 'bootstrap'
//import { useState, useEffect } from 'react'

export const Main = () =>{

   /* const login = ()=>{

        const [islogin,setLogin] = useState(false);
        const [create, setCreate] = useState(false);
        

        if(!islogin){

            return setLogin(islogin)
        }else{
            setCreate(create)
        }

    }

    login()

    const [user,setUser] = useState([]);
    const [password,setPassword] = useState([]);


   
    useEffect(()=>{
        const apiFetch = async ()=>{
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/users');

                if(!response.ok){
                    throw new Error(`Error! status:${response.status}`)
                }

                const result = response.json();
               
                setUser([...result])
                setPassword([...password])
            } catch (error) {
                console.log(error);
            }
        } 
        apiFetch();
    },[])*/

   
    return(
        <div className="container">
            <div className="row md-12">
                <div className="jumbotron text-center" >
                    <h1 className="display-3">INGRESO AL SISTEMA</h1>
                    
                    <div className='col'>
                        <div className='row'>
                            <form action="" className='form-container'>
                                <div className='form-group'>
                                    <label htmlFor="document" className="form-label">Usuario</label>
                                    <input type="text" name="user" id="user" placeholder='usuario' value={{}} />
                                </div>
                                
                                <br/>     

                                <div className='form-group'>
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" placeholder='contraseña' value={{}} />
                                </div>
                                <div className='form-group'>
                                   { user==true && password==true  ? 
                                    (<a className='btn btn-success' href="/app/dashboard" required>INGRESAR</a>)
                                    :
                                    (<a className='btn btn-success' href="/app/userCreate" required>INGRESAR</a>)
                                   } 
                                  
                                    
                                </div>
                              

                                <div className='form-group'>
                                    <Link to="/app/dashboard/usercreate" className="btn btn-primary">CREAR CUENTA</Link>
                                    <Link to="/app/dashboard/loginrestore" className="btn btn-danger">RESTAURA CONTRASEÑA</Link>
                                </div>
                            </form>
                        </div>

                        <div className='row'>
                            
                            <p>
                                <blockquote>
                                    SISTEMA DE GESTION
                                </blockquote>
                            </p>                    
                        </div>
                    </div>
                  
                  
                </div>
            </div>
        </div>
    )
}