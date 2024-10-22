import { Route, Routes } from 'react-router-dom';
import './css/App.css'

//import {Card} from './components/ProductCard'
import {Products} from './components/Products'
import { Table } from './components/Tables';
import { Main } from './components/InitialView';
import { TicketGet } from './components/Ticket/Ticketget';
import { TICKETCREATE} from './components/Ticket/Ticketcreate';
import { USERGET } from './components/User/Userget';
import { USERCREATE } from './components/User/Usercreate';
import { USEREDIT } from './components/User/Useredit';
import { DashBoard } from './components/DashBoard';

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/app' element={<Main/>}></Route>
        <Route path='/app/products' element={<Products/>}></Route>
        <Route path='/app/products/?'></Route>
        <Route path='/app/categories/'></Route>
        <Route path='/app/dashboard/ticketget' element={<TicketGet/>}></Route>
        <Route path='/app/dashboard/ticketcreate' element={<TICKETCREATE/>}></Route>
        <Route path='/app/api/' element={<Table/>}></Route>
        <Route path='/app/dashboard/' element={<DashBoard/> }></Route>
        <Route path='/app/dashboard/userget' element={<USERGET/>}></Route>
        <Route path='/app/dashboard/usercreate' element={<USERCREATE/>}></Route>
        <Route path='/app/dashboard/useredit' element={<USEREDIT/>}></Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  )
}

