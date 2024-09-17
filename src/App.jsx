
import {Products} from './components/Products'
import {Card} from './components/ProductCard'
import { Main } from './components/InitialView';
import './css/App.css'
import { Route, Routes } from 'react-router-dom';
import { Ticket } from './components/Ticket';
import { User } from './components/User';
import { DashBoard } from './components/Dashboard';

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/app' element={<Main/>}></Route>
        <Route path='/app/products' element={<Products/>}></Route>
        <Route path='/app/products/?'></Route>
        <Route path='/app/categories/'></Route>
        <Route path='/app/dashboard/ticket/' element={<Ticket/>}></Route>
        <Route path='/app/api/' element={<Card/>}></Route>
        <Route path='/app/dashboard/' element={<DashBoard/> }></Route>
        <Route path='/app/dashboard/usercreate' element={<User/>}></Route>
        <Route path='/app/dashboard/useredit' element={<User/>}></Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  )
}