import { Link, useNavigate } from 'react-router-dom';

import Logo from '../Logo';
import NavMenu from '../NavMenu';
import Search from '../Search';

const MainNav = ({ menu, search, onSearch, secondary, signIn, signUp }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center gap-4">
      {menu && (
        <div className="sm:hidden">
          <NavMenu />
        </div>
      )}
      <Logo />
      <div className="flex-1 flex items-center gap-4 justify-end">
        {search && <Search onSearch={onSearch} />}
        {!secondary && (
          <ul className="hidden md:flex gap-3 ">
            {token && (
              <li
                className="text-lg hover-slider"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
                }}
              >
                Sign Out
              </li>
            )}
          </ul>
        )}
        {signIn && (
          <ul className="flex items-center gap-2 md:gap-3 ">
            <li className="text-base text-text-secondary-color">
              <b>New User ?</b>
            </li>
            <Link to={'/signUp'}>
              <li className="text-lg hover-slider">Sign Up</li>
            </Link>
          </ul>
        )}
        {signUp && (
          <ul className="flex items-center gap-1 md:gap-3 ">
            <li className="text-base text-text-secondary-color hidden sm:block">
              <b>Already Registered ?</b>
            </li>
            <Link to={'/signIn'}>
              <li className="text-lg hover-slider">Sign In</li>
            </Link>
          </ul>
        )}
        {menu && (
          <div className="hidden sm:block">
            <NavMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
