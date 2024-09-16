import './index.scss';
const Title = ({ children }) => (
  <div className='s-card-header-title'>{children}</div>
);
const Description = ({ children }) => (
  <div className='s-card-header-description'>{children}</div>
);
export default function Card({ children, title, description, ...props }) {
  return (
    <div {...props} className='s-card'>
      {(title || description) && (
        <div className='s-card-header'>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </div>
      )}

      <div className='s-card-content'>{children}</div>
    </div>
  );
}
