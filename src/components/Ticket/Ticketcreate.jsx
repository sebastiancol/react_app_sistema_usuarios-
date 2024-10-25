import { useState } from 'react';
import '../../css/Ticket.css';
import {} from 'bootstrap';


export const TICKETCREATE = () =>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date_final, setDateFinal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        setTitle('');
        setDescription('');
    };

    return (

        <div className='container'>
            <h1>Ticket</h1>
            
            <form onSubmit={handleSubmit} className="">
                <div className="item">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className=''>
                    <label htmlFor="date_final" className="form-label">Fecha Final</label>
                    <input
                        type="date"
                        id="title"
                        className="form-control"
                        value={date_final}
                        onChange={(e) => setDateFinal(e.target.value)}
                    />
                </div>

               < div className="">
                    <label htmlFor="description" className="form-label">Creado por</label>
                    <select
                    > <option value="">escoja persona</option> </select>
                </div>

                <button type="submit" className="btn btn-primary">Create Ticket</button>
            </form>
        </div>
    )
}
