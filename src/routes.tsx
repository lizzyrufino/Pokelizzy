import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Pokemom from "./pages/pokemom"

export default function Routers(){
    return(
        <BrowserRouter> {/*Define grupos de rotas*/}
            <Routes>
                <Route path="/" element={<Pokemom/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
