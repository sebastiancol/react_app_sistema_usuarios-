import { useEffect,useState } from 'react';
import '../css/DashBoard.css'; 
import  {HamburgerMenu}  from '../components/HamburgerMenu';

export const DashBoard = ()=>   {
  const [url,setUrl] = useState([]);
  useEffect(()=>{
    const apiFetch = async ()=>{
        try {
          const response = await fetch('http://localhost:5173/app/dashboard');
          const data = await response.json();
          //console.log(data);
          setUrl([...data])
        } catch (error) {
          console.log(error);
        }
    } 
    apiFetch();
  },[])

  return (
    <div className="dashboard-container">
      
      <HamburgerMenu/>
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
      
        <ul className="sidebar-menu">
          <li className="sidebar-item"><a href="/app/dashboard">Home</a></li>
          <li className="sidebar-item"><a href="/app/dashboard/useredit/{id}">Perfil</a></li>
          <li className="sidebar-item"><a href="/app/dashboard/ticketget">Historial</a></li>
          <li className="sidebar-item"><a href="/app/dashboard/ticketcreate">Tickets</a></li>
        </ul>
      </aside>
      
      <main className="main-content">
        <header className="header">
          <h1 className="header-title">Bienvenido (usuario)</h1>
        </header>
        <section className="content">
            { url.map((urls)=>{

              urls ? url.flat("/tickget"):url.flat("/ticketcreate")
              })
            }
             <form  className="">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                       
                    />
                </div>

                <div className="">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        
                    ></textarea>
                </div>

                <div className=''>
                    <label htmlFor="date_final" className="form-label">Fecha Final</label>
                    <input
                        type="date"
                        id="title"
                        className="form-control"
                        
                    />
                </div>
               
                <button type="submit" className="btn btn-primary">Create Ticket</button>
            </form>
        </section>
      </main>
    </div>
    
  );
};

/*
  <section className="content">
          <div className="card">
            <h3>Historia 1</h3>
            <p>Creacion de interfaz del sistema</p>
            <img src="" alt="historia1" />
          </div>
          <div className="card">
            <h3>Historia 2</h3>
            <p>Creacion de la base de datos</p>
            <img src="" alt="historia1" />
          </div>
          <div className="card"><
            <h3>Historia 3</h3>
            <p>Creacion de modulo de tickets</p>
            <img src="" alt="historia1" />
          </div>
        </section>
*/