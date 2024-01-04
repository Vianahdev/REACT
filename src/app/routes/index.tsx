import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard, Login} from "../pages"

export const AppRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard />}/>
                <Route path="/login" element={<Login />} />

                <Route path="*" element={<p>Página não encontrada</p>}/>
            </Routes>
        </BrowserRouter>
    )
}