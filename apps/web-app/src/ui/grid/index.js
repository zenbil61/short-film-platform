import './index.css';

export const Row = ({ children,className = '', gap, ...props }) => {
  return (
    <div {...props} className={`row  ${className} ${gap ? `gap-${gap}` : 'gap'}`}>
      {children}
    </div>
  );
};
export const Col = ({ children, className = '', xs, sm, md, lg, ...props }) => {
  const columnClass = `col ${className} ${xs ? ' col-xs-' + xs : ''}${
    sm ? ' col-sm-' + sm : ''
  }${md ? ' col-md-' + md : ''}${lg ? ' col-lg-' + lg : ''}`;
  return (
    <div className={columnClass} {...props}>
      {' '}
      {children}{' '}
    </div>
  );
};
