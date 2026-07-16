import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Expedientes from "../pages/Expedientes";
import Entrevista from "../pages/Entrevista";
import Cronologia from "../pages/Cronologia";
import Documentos from "../pages/Documentos";
import Directorio from "../pages/Directorio";
import Configuracion from "../pages/Configuracion";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/expedientes" element={<Expedientes />} />

                <Route path="/entrevista" element={<Entrevista />} />

                <Route path="/cronologia" element={<Cronologia />} />

                <Route path="/documentos" element={<Documentos />} />

                <Route path="/directorio" element={<Directorio />} />

                <Route path="/configuracion" element={<Configuracion />} />

                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>

        </BrowserRouter>

    );

}
