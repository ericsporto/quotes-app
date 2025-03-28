import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from '@routes/ProtectedRoutes';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Details from '@pages/GraphicDetails';
import Register from '@pages/Register';

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
