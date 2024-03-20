import { Suspense } from 'react';
import OvalLoader from 'components/ui/Loader';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';

const PublicRoutes = () => {
  const { state } = useLocation();
  const { isAuth, loading } = useAuth();
  const shouldRedirect = !isAuth && !loading;

  return shouldRedirect ? (
    <Suspense fallback={<OvalLoader />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={state ? state : '/cluster'} />
  );
};

export default PublicRoutes;
