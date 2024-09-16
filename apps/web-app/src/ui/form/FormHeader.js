import './FormHeader.scss';

export default function FormHeader({ title, description }) {
  const Title = () => <div className='s-form-header-title'>{title}</div>;
  const Description = () => (
    <div className='s-form-header-description'>{description}</div>
  );

  return (
    <div className='s-form-header'>
      {title && <Title />}
      {description && <Description />}
    </div>
  );
}
