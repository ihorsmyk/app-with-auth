import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { TiArrowBackOutline } from 'react-icons/ti';
import { getUserInfo } from 'services/API';
import { Context } from '../../context';
import Loader from 'components/Loader/Loader';

import './UserDetails.scss';

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();
  const { isLoading, error, setIsLoading, setError } = useContext(Context);
  const { userId } = useParams();

  const fetchUserInfo = async userId => {
    try {
      setIsLoading(true);
      const receivedUserInfo = await getUserInfo(userId);
      setUserInfo(receivedUserInfo);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo(userId);
  }, [userId]);

  useEffect(() => {
    if (!error) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <>
      <Link className="go-back" to={location?.state?.from ?? '/'}>
        <TiArrowBackOutline size="60" />
      </Link>

      {isLoading && <Loader />}

      <div className="user">
        <h2 className="user__name"> {userInfo?.name || 'not known'} </h2>
        <p className="user__email">
          <span className="user__hint">email: </span>
          {userInfo?.email || 'not known'}
        </p>
        <p className="user__address">
          <span className="user__hint">address: </span>
          {userInfo?.address?.city || 'not known'}
        </p>
        <p className="user__phone">
          <span className="user__hint">phone: </span>
          {userInfo?.phone || 'not known'}
        </p>
        <p className="user__company">
          <span className="user__hint">company: </span>
          {userInfo?.company?.name || 'not known'}
        </p>
      </div>
    </>
  );
};

export default UserDetails;
