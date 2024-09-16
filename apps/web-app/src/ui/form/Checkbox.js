import './Input.scss';
const Checkbox = ({
  description,
  errorMessage,
  dark,
  ...props
}) => {
  const ErrorMessage = () => (
    <div className='error-message'>{errorMessage}</div>
  );

  return (
    <label className='s-checkbox'>
      <input
        className={`${!!errorMessage ? 's-error' : ''}`}
        type='checkbox'
        {...props}
      />
      <span className='s-checkbox-mark'></span>
      <span className='s-checkbox-description'> {description}</span>
      <div>{errorMessage && <ErrorMessage />}</div>
    </label>
  );
};
export default Checkbox;
