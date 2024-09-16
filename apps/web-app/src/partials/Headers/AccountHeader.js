import './AccountHeader.scss';
import SavedSVG from '@/icons/saved.svg';
import SearchSVG from '@/icons/search.svg';
import ProfileSVG from '@/icons/profile.svg';
import {
  Header,
  HeaderActions,
  HeaderLogo,
  HeaderMenu,
  HeaderButton,
  HeaderIconButton
} from '@/ui/header';
import Container from '@/ui/container';
// import Container from '@/ui/container';
export default function AccountHeader() {
  return (
    <Header id='account-header'>
      <HeaderLogo>short film</HeaderLogo>
      <HeaderMenu>
        <HeaderButton href='/search'>Filmler</HeaderButton>
        <HeaderButton>Diziler</HeaderButton>
        <HeaderButton>Yeni Çıkanlar</HeaderButton>
        <HeaderButton>Listem</HeaderButton>
      </HeaderMenu>
    </Header>
  );
}
