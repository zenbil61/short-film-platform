import './Input.scss';
const Radio = ({ description, errorMessage, dark, ...props }) => {
  const ErrorMessage = () => (
    <div className='error-message'>{errorMessage}</div>
  );

  return (
    <label className='s-radio'>
      <input
        className={`${!!errorMessage ? 's-error' : ''}`}
        type='radio'
        {...props}
      />
      <span className='s-radio-mark'></span>
      <span className='s-radio-description'> {description}</span>
      <div>{errorMessage && <ErrorMessage />}</div>
    </label>
  );
};
Radio.Group = ({ vertical, children }) => {
  return (
    <div className={`s-radio-group  ${vertical ? 'vertical' : ''}`}>
      {children}
    </div>
  );
};
export default Radio;
