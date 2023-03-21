import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context';

const PrivateRoute = () => {
  const { isAuth } = useContext(Context);
  return isAuth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
