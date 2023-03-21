import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SlLogin } from 'react-icons/sl';
import { Context } from '../../context';
import { LOCAL_KEY } from 'constants';
import './AuthForm.scss';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth, setIsAuth } = useContext(Context);

  const inputOperator = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        throw new Error('unexpected value');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    localStorage.setItem(LOCAL_KEY.value, JSON.stringify(email));
    setIsAuth(true);
  };

  if (!isAuth) {
    return (
      <div className="overlay">
        <form onSubmit={formSubmit} className="form">
          <label className="form__label">
            Email
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={inputOperator}
              className="form__input"
            />
          </label>
          <label className="form__label">
            Password
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={inputOperator}
              className="form__input"
            />
          </label>
          <button type="submit" className="form__btn">
            <SlLogin size="40" />
          </button>
        </form>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AuthForm;
