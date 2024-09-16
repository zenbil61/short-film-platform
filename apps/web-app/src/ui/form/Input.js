import './Input.scss';
const Input = ({
  title = null,
  description,
  errorMessage,
  dark,
  type,
  ...props
}) => {
  const isTextArea = type === 'textarea';

  const ErrorMessage = () => (
    <div className='error-message'>{errorMessage}</div>
  );

  if (isTextArea) {
    return (
      <>
        <textarea className={`${!!errorMessage ? 's-error' : ''}`} {...props} />
        {errorMessage && <ErrorMessage />}
      </>
    );
  }

  return (
    <>
      <input
        className={`${!!errorMessage ? 's-error' : ''}`}
        type={type || 'text'}
        {...props}
      />
      {errorMessage && <ErrorMessage />}
    </>
  );
};

export default Input;
