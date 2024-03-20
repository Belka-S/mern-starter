import { lazy, useEffect } from 'react';
import OvalLoader from 'components/ui/Loader';
import Toast from 'components/ui/Toast';
import SharedLayout from 'layouts/SharedLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';
import { loadWebFonts } from 'styles/loadWebFonts';
import { useAuth } from 'utils/hooks';

const HomePage = lazy(() => import('pages/HomePage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ClusterListPage = lazy(() => import('pages/ClusterListPage'));
const ClusterPage = lazy(() => import('pages/ClusterPage'));

const App = () => {
  const { loading } = useAuth();

  useEffect(() => {
    loadWebFonts();
  }, []);

  if (loading) return <OvalLoader />;
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoutes />}>
            <Route path="signup" element={<SignupPage />} />
            <Route path="signin" element={<SigninPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="cluster" element={<ClusterListPage />} />
            <Route path="cluster/:id" element={<ClusterPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Toast />
    </>
  );
};

export default App;
