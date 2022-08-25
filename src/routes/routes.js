import {Route, Routes} from 'react-router-dom'
import {Dashboard} from "../domains/dashboard";
import {CreateProduct} from "../domains/dashboard/create-product";
import {CreateTable} from "../domains/dashboard/create-table";
import {Tables} from "../domains/dashboard/tables";
import {Products} from "../domains/dashboard/products";

export const RoutesWrapper = () =>{
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard />}/>
            <Route exact path='/create-product' element={<CreateProduct />}/>
            <Route exact path='/create-table' element={<CreateTable />}/>
            <Route exact path='/tables' element={<Tables />}/>
            <Route exact path='/products' element={<Products />}/>
        </Routes>
    )
}