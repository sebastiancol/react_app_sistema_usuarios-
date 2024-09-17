import {Link} from 'react-router-dom'
import {} from 'bootstrap'
//import { useState } from 'react'

export const Main = () =>{

    /*const login = (()=>{

        const [islogin,setLogin] = useState(false);
        const [create, setCreate] = useState(false);

        if(!islogin){

            return handleEvent({setLogin})
        }else{
            setCreate(create)
        }

    })

    login()*/
   
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
                                    <input type="text" name="" id="" placeholder='usuario' />
                                </div>
                                
                                <br/>     

                                <div className='form-group'>
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="" id="" placeholder='contraseña' />
                                </div>

                                <div className='form-group'>
                                    <a className='btn btn-success' href="/app/dashboard" required>INGRESAR</a>
                                </div>

                                <div className='form-group'>
                                    <Link to="/app/usercreate" className="btn btn-primary">CREAR CUENTA</Link>
                                    <Link to="/app/loginrestore" className="btn btn-danger">RESTAURA CONTRASEÑA</Link>
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