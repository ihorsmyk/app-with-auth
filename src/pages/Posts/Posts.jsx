import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getPosts } from 'services/API';
import { Context } from '../../context';
import { Notify } from 'notiflix';

import './Posts.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { error, setIsLoading, setError } = useContext(Context);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!error) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <ul className="posts">
      {Array.isArray(posts) &&
        posts?.map(post => {
          return (
            <li key={post.id} className="posts__item">
              <Link
                state={{ from: location }}
                to={String(post.id)}
                className="posts__link"
              >
                <h2 className="posts__title">{post?.title}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Posts;
