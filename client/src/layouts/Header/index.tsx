import classNames from 'classnames';
import SvgIcon from 'components/ui/SvgIcon';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'utils/hooks';

import ProfileBtn from './ProfileBtn';

import s from './index.module.scss';

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__wrap)}>
        <NavLink to={'/'}>
          <SvgIcon svgId="menu-home" size={32} />
        </NavLink>

        {isAuth && <NavLink to={'/cluster'}>Cluster</NavLink>}

        <div className={s.login}>
          {!isAuth && <NavLink to={'/signup'} />}
          {!isAuth && <NavLink to={'/signin'}>Log In</NavLink>}
          {isAuth && <ProfileBtn />}
        </div>
      </div>
    </header>
  );
};

export default Header;
