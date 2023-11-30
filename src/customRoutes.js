import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const CustomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default CustomeRouter;
