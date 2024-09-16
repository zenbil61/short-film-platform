export const CarouselImage = ({ src, index, lazy, carouselItemCount }) => {
  const imageProps = {};

  if (!lazy) imageProps['src'] = src;
  else if (lazy && index < carouselItemCount) imageProps['src'] = src;
  else imageProps['data-src'] = src;

  return <img {...imageProps} />;
};

const CarouselItem = ({ onClick, width, gap, children, ...props }) => (
  <div onClick={onClick} {...props}>
    <div
      className='carousel-item'
      style={{ width: `${width}px`, padding: `${gap}px` }}
    >
      {children}
    </div>
  </div>
);

export default CarouselItem;
