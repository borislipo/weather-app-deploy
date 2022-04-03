import { Route, Routes, HashRouter } from "react-router-dom";
import { DashboardRouter } from "./dashboardRouter";

export const AppRouter = () => {
  return (
    <HashRouter hashType="hashbang" basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </HashRouter>
  );
};
