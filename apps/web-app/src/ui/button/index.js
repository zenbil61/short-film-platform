import './index.scss';
export default function Button({ children, full, size = 'md', ...props }) {
  return (
    <button className={`s-btn ${full ? 'full' : ''} ${size}`} {...props}>
      {children}
    </button>
  );
}
