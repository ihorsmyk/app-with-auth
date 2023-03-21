import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { Context } from '../../context';
import { LOCAL_KEY } from 'constants';
import AuthForm from 'pages/AuthForm/AuthForm';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Main = lazy(() => import('pages/Main/Main'));
const Users = lazy(() => import('pages/Users/Users'));
const UserDetails = lazy(() => import('pages/UserDetails/UserDetails'));
const Posts = lazy(() => import('pages/Posts/Posts'));
const PostDetails = lazy(() => import('pages/PostDetails/PostDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const login = JSON.parse(localStorage.getItem(LOCAL_KEY.value)) ?? null;

export const App = () => {
  const [isAuth, setIsAuth] = useState(login);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuth) return;
    <Navigate to="login" />;
  }, [isAuth]);

  useEffect(() => {
    if (!error) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <Context.Provider
      value={{
        isAuth,
        isLoading,
        error,
        setIsAuth,
        setIsLoading,
        setError,
      }}
    >
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />}>
                <Route index element={<Main />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:userId/*" element={<UserDetails />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId/*" element={<PostDetails />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>

            <Route path="/login" element={<AuthForm />} />
          </Routes>
        </Suspense>
      </>
    </Context.Provider>
  );
};
