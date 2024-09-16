export const LazyImage = ({ src, index, lazy }) => {
  const imageProps = {};

  if (!lazy) imageProps['src'] = src;
  else if (lazy && index === 0) imageProps['src'] = src;
  else imageProps['data-src'] = src;
  return <img className='lazy-image' {...imageProps} />;
};

const SlideItem = ({ children, width, onClick, ...props }) => (
  <div
    className='slide-item'
    style={{ width: `${width}px` }}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);
//<Image src={src} lazy={lazy} index={index} />
export default SlideItem;
