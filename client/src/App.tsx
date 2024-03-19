import { lazy, useEffect } from 'react';
import SharedLayout from 'layouts/SharedLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';
import { loadWebFonts } from 'styles/loadWebFonts';

const HomePage = lazy(() => import('pages/HomePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const SigninPage = lazy(() => import('pages/SigninPage'));
const ClusterListPage = lazy(() => import('pages/ClusterListPage'));
const ClusterPage = lazy(() => import('pages/ClusterPage'));
const CompanyListPage = lazy(() => import('pages/CompanyListPage'));
const CompanyPage = lazy(() => import('pages/CompanyPage'));

const App = () => {
  useEffect(() => {
    loadWebFonts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route element={<PublicRoutes />}>
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="cluster" element={<ClusterListPage />} />
          <Route path="cluster/:id" element={<ClusterPage />} />
          <Route path="company" element={<CompanyListPage />} />
          <Route path="company/:id" element={<CompanyPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
