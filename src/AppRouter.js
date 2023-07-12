import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import RouteLayout from "./Components/RouteLayout";

function AppRouter() {
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Route>
     </Routes>
    </BrowserRouter>
}

export default AppRouter;
