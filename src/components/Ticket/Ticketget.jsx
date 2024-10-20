import { useState,useEffect } from 'react';
import '../../css/Ticket.css';
import {} from 'bootstrap';

export const TICKETGET = () => {

    const [ticket,setTicket] = useState([]);
   
    useEffect(()=>{
        const apiFetch = async ()=>{
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/tickets');

                if(!response.ok){
                    throw new Error(`Error! status:${response.status}`)
                }

                const result = response.json();
               
                return setTicket([...result])
            } catch (error) {
                console.log(error);
            }
        } 
        apiFetch();
    },[])

  

    return (
        <div className="containera">

            <div className="item">
                <h2>LISTADO TICKETS</h2>
                <form  method="GET">
                    <div className="form-control ">
                    <input type="text" className="form-control"  name="busqueda" placeholder="buscar producto" />
                    <br/>
                    <input type="submit" className="btn btn-primary" name="buscador"/>
                    </div>
                </form>
            
                <table className='table table-center'>
                    <thead>
                        <tr>
                            <th>TITULO</th>
                            <th>DESCRIPCIÓN</th>
                            <th>CREADO POR</th>
                            <th>FECHA FINAL</th>
                            <th>FECHA CREACION</th>
                            <th>FECHA ACTUALIZACION</th>
                            <th scope="col">OPERACIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticket.map((tickets)=>{
                            <tr key={tickets.id}>
                                <td>{tickets.title}</td>
                                <td>{tickets.description}</td>
                                <td>{tickets.user_id}</td>
                                <td>{tickets.date_final}</td>
                                <td>{tickets.created_at}</td>
                                <td>{tickets.updated_at}</td>
                                <td>
                                    <button type="button" className="btn btn-primary btn-">
                                        <a className="" href="{{ route('Ticket_edit', $item->id) }}">EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                    </button>
                                    
                                    <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteTicket" id="delete">
                                        ELIMINAR
                                    </button>
                                    
                                    <div className="modal fade" data-animation="slideInOutLeft" aria-labelledby="modal-title" id="deleteTicket">
                                                                    
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            
                                                <div className="modal-body">
                                                    <p>¿DESEA ELIMINAR EL TICKET?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                                    <button type="button" className="btn btn-primary">
                                                        <a className="" href="">CONFIRMAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
