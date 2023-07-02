import { Navigate, Route, Routes } from "react-router-dom";
import { GuardRoute } from "../../guards/GuardRoute";
import { AppContext } from "../../context/AppProvider";
import { useContext } from "react";
import { PrincipalLayout } from "../layout/PrincipalLayout";
import { AsignarEstudiantePage } from "../pages/AdministratorPages/AsignarEstudiantePage";
import { AgregarMateriaPage } from "../pages/AdministratorPages/AgregarMateriaPage";
import { AgregarEstudiantePage } from "../pages/AdministratorPages/AgregarEstudiantePage";
import { WelcomeAdminPage } from "../pages/AdministratorPages/WelcomeAdminPage";
import AlumnoPage from "../pages/AlumnoPage";

export const AppRoutes = () => {
  const CONTEXT:any = useContext(AppContext);
  return (
    
      <Routes>
        <>
          <Route path="/" element={
            <GuardRoute auth={CONTEXT.auth}>
              <Navigate to={'administrador'}/>
            </GuardRoute>
          }
          />
          <Route path="/" element={
            <GuardRoute auth={CONTEXT.authEstudiante}>
              <Navigate to={'estudiante'}/>
            </GuardRoute>
          }/>
          <Route path="estudiante" element={
            <GuardRoute auth={CONTEXT.authEstudiante}>
              <AlumnoPage codigo_usuario={CONTEXT.codigo_usuario}/>
            </GuardRoute>
          }/>
          <Route path={"administrador"} element={
            <GuardRoute auth={CONTEXT.auth}>
              <PrincipalLayout/>
            </GuardRoute>
          }
          children={
          <>
            <Route path=":id" element={<WelcomeAdminPage/>}/>
            <Route path=":id/asignar-estudiante" element={<AsignarEstudiantePage/>}/>
            <Route path=":id/agregar-materia" element={<AgregarMateriaPage/>}/>
            <Route path=":id/agregar-estudiante" element={<AgregarEstudiantePage/>}/>
          </>
          }/>
        </>
      </Routes>
  );
};
