'use client';
import Container from '@/ui/container';
import { useState } from 'react';
import List from '@/ui/list';
import PhoneModal from './modals/phoneModal';
import PasswordModal from './modals/passwordModal';
import EmailModal from './modals/emailModal';
import UserInfoModal from './modals/userInfo/userInfoModal';
export default function Page({ params }) {
  const handleClickPhone = () => {};
  const handleClickUserName = () => {};
  const handeClickEmail = () => {};
  const handleClickPassword = () => {};

  const [isVisiblePhoneModal, setPhoneModal] = useState(false);
  const [isVisibleEmailModal, setEmailModal] = useState(false);
  const [isVisiblePasswordModal, setPasswordModal] = useState(false);
  const [isVisibleUserInfoModal, setUserInfoModal] = useState(false);
  return (
    <div className='page'>
      <h1 className='page-title'> Profilim </h1>
      <p className='page-description'>Profil Detayları</p>
      <div className='page-content'>
        {isVisibleEmailModal && (
          <EmailModal onClose={() => setEmailModal(false)} />
        )}
        {isVisiblePhoneModal && (
          <PhoneModal onClose={() => setPhoneModal(false)} />
        )}
        {isVisiblePasswordModal && (
          <PasswordModal onClose={() => setPasswordModal(false)} />
        )}
        {isVisibleUserInfoModal && (
          <UserInfoModal onClose={() => setUserInfoModal(false)} />
        )}

        <List>
          <List.Item
            onClick={() => setUserInfoModal(true)}
            title='Kullanıcı Bilgileri :'
            description='Kullanıcı Adı, Ad Soyad, Profil Fotoğrafı, Bio'
          />
          <List.Item
            onClick={() => setEmailModal(true)}
            title='Email :'
            description='mustafa@zenbil.com'
          />
          <List.Item
            onClick={() => setPhoneModal(true)}
            title='Cep Telefonu :'
            description='05352732761'
          />
          <List.Item
            onClick={() => setPasswordModal(true)}
            title='Şifre İşlemleri :'
            description='Şifrenizi değiştirin veya yenileyin'
          />
        </List>
      </div>
    </div>
  );
}
