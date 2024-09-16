import style from './index.module.scss';
export default function Container({ children, full, ...props }) {
  return (
    <div {...props} className={full ? style.fullContainer : style.container}>
      {children}
    </div>
  );
}
