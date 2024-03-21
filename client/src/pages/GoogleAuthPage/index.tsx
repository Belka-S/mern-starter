import { useSearchParams } from 'react-router-dom/dist';
import { useAppDispatch } from 'store';
import { useAppExtraDispatch } from 'store';
import { authenticate, getUserThunk } from 'store/auth';

const GoogleAuthPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const dispatchExtra = useAppExtraDispatch();

  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  dispatch(authenticate({ accessToken, refreshToken }));
  dispatchExtra(getUserThunk());

  if (!accessToken) return <div className={'hidden'} />;
};

export default GoogleAuthPage;
