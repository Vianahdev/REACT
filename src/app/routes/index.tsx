import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages"

export const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />}/>

                <Route path="*" element={<p>Página não encontrada</p>}/>
            </Routes>
        </BrowserRouter>
    )
}