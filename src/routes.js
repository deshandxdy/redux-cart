import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import RouteLayout from './Components/RouteLayout';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
    </Route>
))