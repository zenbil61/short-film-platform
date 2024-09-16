import './index.scss';
import SuccessSVG from '@/icons/success.svg';
import ErrorSVG from '@/icons/error.svg';

const Result = ({ title, description, isSuccess }) => {
  return (
    <div className='result'>
      <div className='result-icon'>
        {isSuccess ? <SuccessSVG /> : <ErrorSVG />}
      </div>

      <div className='result-description'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Result;
