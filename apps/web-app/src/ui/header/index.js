import './index.scss';
import Link from 'next/link';

export const HeaderButton = ({ children, href = '#' }) => (
  <Link href={href} className='header-link'>
    {children}
  </Link>
);
export const HeaderIconButton = ({ children, href = '#' }) => (
  <Link href={href} className='header-icon-link'>
    {children}
  </Link>
);
export const HeaderActions = ({ children }) => (
  <div className='header-actions'>{children}</div>
);
export const HeaderMenu = ({ children }) => (
  <div className='header-menu'>{children}</div>
);
export const HeaderLogo = ({ children }) => (
  <Link href='/' className='app-logo'>
    {children}
  </Link>
);

export function Header({ children, ...props }) {
  return <div {...props} className='header'>{children}</div>;
}
