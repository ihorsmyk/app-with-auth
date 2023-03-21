import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getUsers } from 'services/API';
import { Context } from '../../context';
import { Notify } from 'notiflix';

import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const { error, setIsLoading, setError } = useContext(Context);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!error) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <ul className="users">
      {Array.isArray(users) &&
        users?.map(user => {
          return (
            <li key={user.id} className="users__item">
              <Link
                state={{ from: location }}
                to={String(user.id)}
                className="users__link"
              >
                <h2 className="users__name">{user?.name}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Users;
