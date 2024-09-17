import { useState } from 'react';
import '../css/Ticket.css';
import {} from 'bootstrap';

export const Ticket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        setTitle('');
        setDescription('');
    };

    return (
        <div className="container">
            <h1>Ticket</h1>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Create Ticket</button>
            </form>

            <h2>Listado de Tickets</h2>

            <div className="">
                <form action="{{route('/app/dashboard')}}" method="GET">
                    <div className="form-control">
                        <div className="col-sm-4">
                            <input type="text" className="form-control"  name="busqueda" placeholder="buscar producto" />
                        </div>
                        <div className="col-sm-4">
                            <input type="submit" className="btn btn-primary" name="buscador" />
                        </div>
                    </div>
                    
                </form>
            
            </div>
            <table className='table table-center'>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>descipcion</th>
                        <th>Fecha creacion</th>
                        <th>Fecha actualizacion</th>
                        <th scope="col">Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" className="btn btn-primary btn-">
                                <a className="" href="{{ route('task_edit', $item->id) }}">EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                            </button>
                            
                            <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteTask" id="delete">
                                ELIMINAR
                            </button>
                            
                            <div className="modal fade" data-animation="slideInOutLeft" aria-labelledby="modal-title" id="deleteTask">
                                                            
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    
                                        <div className="modal-body">
                                            <p>¿DESEA ELIMINAR EL TICKET?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                            <button type="button" className="btn btn-primary">
                                                <a className="" href="{{ route('task_delete', $item->id) }}">CONFIRMAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
                        
                     
            </table>
        </div>
    );
}
