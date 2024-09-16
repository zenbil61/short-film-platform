import Modal from '@/ui/modal';
import { OtpInput, FormItem, Input } from '@/ui/form';
import EmailSVG from '@/icons/email.svg';
import Result from '@/ui/result';
import './emailModal.scss';
import { getErrorMessage } from '@/common/formik.helper';
import { useState } from 'react';
import Button from '@/ui/button';

const VIEW_TYPE = {
  EMAIL: 1,
  OTP: 2,
  RESULT: 3
};

const OtpIcon = () => {
  return (
    <div className='otp-icon'>
      <div className='otp-icon-wrapper'>
        <EmailSVG />
      </div>
    </div>
  );
};
const EmailModal = (props) => {
  const [view, setView] = useState(VIEW_TYPE.EMAIL);
  const handleVerify = () => {
    setView(VIEW_TYPE.OTP);
  };
  const handleChangeEmail = () => {
    setView(VIEW_TYPE.EMAIL);
  };
  const handleOtp = () => {
    setView(VIEW_TYPE.RESULT);
  };
  const handleClose = () => {
    props.onClose();
  };
  const handleResendCode = () => {
    setView(VIEW_TYPE.OTP);
  };
  return (
    <Modal
      className='email-modal'
      hideFooter
      {...props}
      title='E-posta İşlemleri'
    >
      <br />

      {view === VIEW_TYPE.EMAIL && (
        <>
          <OtpIcon />
          <div className='email-modal-description'>
            Geçerli e-posta adresin: zenbilmustafa61@gmail.com
          </div>
          <div className='email-modal-input'>
            <FormItem textCenter title='Yeni eposta adresinizi girin'>
              <Input
                name='email'
                placeholder='Email Adresinizi Girin'
                // errorMessage={getErrorMessage(formik, 'email')}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                // value={formik.values.email}
              />
            </FormItem>
          </div>
        </>
      )}
      {view === VIEW_TYPE.OTP && (
        <>
          <OtpIcon />
          <div className='email-modal-description'>
            <a onClick={handleChangeEmail}>Eposta adresini değiştir.</a>
            <br />
            mustafa@zenbil.com adresine gelen kodu 180 saniye içinde
            onaylaman gerekiyor
          </div>
          <FormItem textCenter title='Lütfen Doğrulama Kodunu Girin'>
            <OtpInput length={6} onChangeOTP={(e) => console.log(e)} />
          </FormItem>
        </>
      )}
      {view === VIEW_TYPE.RESULT && (
        <Result
          isSuccess={true}
          title='İşlem başarılı'
          description='Eposta adresiniz başarıyla değiştirilmiştir'
        />
      )}

      <Modal.Footer style={{ justifyContent: 'center' }}>
        {view === VIEW_TYPE.EMAIL && (
          <Button onClick={handleVerify}>Güncelle</Button>
        )}
        {view === VIEW_TYPE.OTP && (
          <>
            <a onClick={handleResendCode}>Tekrar gönder</a>
            <Button onClick={handleOtp}>Doğrula</Button>
          </>
        )}
        {view === VIEW_TYPE.RESULT && (
          <Button onClick={handleClose}>Kapat</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default EmailModal;
