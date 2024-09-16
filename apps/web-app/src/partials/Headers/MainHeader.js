'use client';
import './MainHeader.scss';
import SavedSVG from '@/icons/saved.svg';
import SearchSVG from '@/icons/search.svg';
import ProfileSVG from '@/icons/profile.svg';
import { useEffect } from 'react';
import {
  Header,
  HeaderActions,
  HeaderLogo,
  HeaderMenu,
  HeaderButton,
  HeaderIconButton
} from '@/ui/header';
export default function MainHeader() {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scroll'); // Scroll sonrası arkaplan rengi
    } else {
      header.classList.remove('scroll'); // Scroll sonrası arkaplan rengi
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Header id="main-header">
      <HeaderLogo>short film</HeaderLogo>
      <HeaderMenu>
        <HeaderButton href='/'>Anasayfa</HeaderButton>
        <HeaderButton href='/search'>Filmler</HeaderButton>
        <HeaderButton>Diziler</HeaderButton>
        <HeaderButton>Yeni Çıkanlar</HeaderButton>
        <HeaderButton>Listem</HeaderButton>
      </HeaderMenu>
      <HeaderActions>
        <HeaderIconButton>
          <SearchSVG className='svg-icon' />
        </HeaderIconButton>
        <HeaderIconButton>
          <SavedSVG className='svg-icon' />
        </HeaderIconButton>
        <HeaderIconButton href='/account/profile'>
          <ProfileSVG className='svg-icon' />
        </HeaderIconButton>
      </HeaderActions>
    </Header>
  );
}
