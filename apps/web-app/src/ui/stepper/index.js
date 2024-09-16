import './index.scss';
const Stepper = ({ children }) => {
  return <div className='stepper-wrapper'>{children}</div>;
};
Stepper.Item = ({ current, step = 1, onClick, children }) => {
  const isActive = current === step;
  const isComplete = current > step;
  return (
    <div
      onClick={() => onClick(step)}
      className={`stepper-item ${isActive ? ' active' : ''} ${
        isComplete ? ' completed' : ''
      }`}
    >
      <div className='step-counter'>
        {isComplete ? <div className='tick'></div> : step}
      </div>
      <div className='step-name'>{children}</div>
    </div>
  );
};
export default Stepper;
