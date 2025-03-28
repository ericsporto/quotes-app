import { Navigate, Outlet } from 'react-router-dom';
import Layout from '@components/Layout';
import { useAuthStore } from '@stores/useUserStore';

const ProtectedRoutes = () => {
  const auth = useAuthStore();

  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoutes;
