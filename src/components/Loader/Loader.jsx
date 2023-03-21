import { RotatingTriangles } from 'react-loader-spinner';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="overlay">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={['#40513b', '#40513b', '#40513b']}
      />
    </div>
  );
};

export default Loader;
