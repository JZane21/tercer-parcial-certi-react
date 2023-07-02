import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AppRoutes } from "../app/router/AppRoutes";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth/login"}/>}/>
      <Route path="/auth/*" element={<AuthRoutes/>}/>
      <Route path="/app/*" element={<AppRoutes/>}/>
    </Routes>
  );
};
