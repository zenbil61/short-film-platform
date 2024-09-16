import './index.scss';

const List = ({ children, ...props }) => {
  return (
    <div {...props} className='s-list'>
      {children}
    </div>
  );
};
List.Item = ({ children, title, description, ...props }) => (
  <div {...props} className='s-list-item'>
    <div className='s-list-item-title'>{title}</div>
    <div className='s-list-item-description'>{description}</div>
  </div>
);
List.ImageItem = ({ children, src, title, description, ...props }) => (
  <div {...props} className='s-list-image-item'>
    <img src={src} />
    <div className='s-list-image-item-content'>
      <div className='s-list-image-item-title'> {title}</div>
      <div className='s-list-image-item-description'>{description}</div>
      <div> {children}</div>
    </div>
  </div>
);

export default List;
