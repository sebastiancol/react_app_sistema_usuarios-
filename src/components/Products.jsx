

import { SearchButton } from './SearchButton';
//import {Table} from './Table'
import { Table } from './Tables';
//import {Card} from './ProductCard'
//import { SelectDropdown } from '../components/SelectDropdown';
//import { HamburgerMenu } from './HamburgerMenu';
//import { ContactForm } from './ContactForm';


export const Products = ()=>{
  
    return(
        <div className='container'>
            <div className="row m-12">
                <div className="col-12 mx-auto"> 
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title text-center">CATALOGO DE PRODUCTOS</h3>
                        </div>
                        <div className="card-body">
                            
                            <SearchButton  />
                           
                            <br/>
                            <Table/>
                            
                            <br />
                          
                        </div> 
                    </div>        
                </div>
            </div>
        </div>
       
    )
}