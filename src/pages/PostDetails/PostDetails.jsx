import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { TiArrowBackOutline } from 'react-icons/ti';
import { getPostInfo } from 'services/API';
import { Context } from '../../context';
import Loader from 'components/Loader/Loader';

import './PostDetails.scss';

const PostDetails = () => {
  const [postInfo, setPostInfo] = useState(null);
  const location = useLocation();
  const { isLoading, error, setIsLoading, setError } = useContext(Context);
  const { postId } = useParams();

  const fetchPostInfo = async postId => {
    try {
      setIsLoading(true);
      const receivedPostInfo = await getPostInfo(postId);
      setPostInfo(receivedPostInfo);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPostInfo(postId);
  }, [postId]);

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

      <div className="post">
        <h2 className="post__title"> {postInfo?.title} </h2>
        <p className="post__body"> {postInfo?.body} </p>
      </div>
    </>
  );
};

export default PostDetails;
