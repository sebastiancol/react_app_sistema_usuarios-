import { useState } from "react";

export const SearchButton = ()=>{
   
    const [inputValue, setInputValue] = useState('')
    
    const button = ()=>{

      setInputValue(inputValue)
      const texto = ['']
      texto.push(inputValue)
      //texto.map((text)=>text) 
      console.log(texto)
        
    }

    return(
        <div className="section text-center">
            
            <input className="" type="text" placeholder="buscar producto"  onChange={(event) => setInputValue(event.target.value)} aria-label="Search"/>
            <button className="btn btn-primary" type="button" onClick={button}  >Buscar</button>
        </div>
    )
}