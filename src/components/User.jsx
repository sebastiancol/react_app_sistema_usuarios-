import { useState } from 'react';

import '../css/User.css';



export const User = () => {
  const [formData, setFormData] = useState({
      document: '',
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`User Registered: ${JSON.stringify(formData)}`);
      // Here you can add functionality to send data to your server
    };



  return (
      <div className="container">
        
        <div className='item'>
          <h2 className="form-title">Crear Usuario</h2>
        </div>

        <div className='item'>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="document" className="form-label">Documento</label>
            <input
              type="text"
              id="document"
              name="document"
              value={formData.document}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="form-label">Direccion</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Telefono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <button type="submit" className="form-button">CREAR USUARIO</button>
        </form>
        </div>
       
      </div>
    );
}

