import { useState,useEffect } from 'react';
import '../../css/Ticket.css';
import '../../css/SelectDropdown.css'; 
//import {} from 'bootstrap';


export const TICKETCREATE = () =>{

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date_final, setDateFinal] = useState('');
    const [users,setUser]= useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        setTitle('');
        setDescription('');
    };

    useEffect(() => {
        const apifetch = async ()=>{
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/users');
                //const response2 = await fetch('http://127.0.0.1:8000/api/v1/tickets');

                if(!response.ok){
                    throw new Error(`Error! status:${response.status}`)
                }
               
                const result = await response.json();
                setUser([...result])
            } catch (error) {
                console.log(error);
            } 
        }  
      
      apifetch();
      
    
      /*return () => {
        second
      }*/
    }, [])
    
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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
                <br/>
               < div className="">
                    <label htmlFor="description" className="form-label">Creado por</label>
                    
                    <select
                        id="options"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="select-dropdown"
                    >
                        <option value="">SELECCIONE PERSONA</option>
                        {users.map((option, index) => (
                           <option key={index} value={option}>{option.first_name}</option>
                        ))}
                    </select>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Crear Ticket</button>
            </form>
        </div>
    )
}
