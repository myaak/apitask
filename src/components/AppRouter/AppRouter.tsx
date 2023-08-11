import { Routes, Route, RouteObject } from "react-router-dom";
import { AppRoutes } from "./routes.tsx";

const AppRouter = () => {
  return (
    <Routes>
      {AppRoutes.map((item: RouteObject, index: number) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
