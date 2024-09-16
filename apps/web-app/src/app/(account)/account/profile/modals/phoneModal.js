import Modal from '@/ui/modal';
import { OtpInput, FormItem, MaskedInput } from '@/ui/form';
import PhoneSVG from '@/icons/mobile-phone.svg';
import Result from '@/ui/result';
import './phoneModal.scss';
import { useState } from 'react';
import Button from '@/ui/button';

const VIEW_TYPE = {
  PHONE: 1,
  OTP: 2,
  RESULT: 3
};

const OtpIcon = () => {
  return (
    <div className='otp-icon'>
      <div className='otp-icon-wrapper'>
        <PhoneSVG />
      </div>
    </div>
  );
};
const PhoneModal = (props) => {
  const [view, setView] = useState(VIEW_TYPE.PHONE);
  const handleVerify = () => {
    setView(VIEW_TYPE.OTP);
  };
  const handleChangePhone = () => {
    setView(VIEW_TYPE.PHONE);
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
      className='phone-modal'
      hideFooter
      {...props}
      title='Telefon İşlemleri'
    >
      <br />

      {view === VIEW_TYPE.PHONE && (
        <>
          <OtpIcon />
          <div className='phone-modal-description'>
            Geçerli telefon numaran: +905352732761. <br />
            Bunu ne ile güncellemek istersin?
          </div>
          <div className='phone-modal-input'>
            <FormItem textCenter title='Telefon Numarasını Girin'>
              <MaskedInput
                name='phone'
                mask='0(___) ___ __ __'
                placeholder='0(___) ___ __ __'
              />
            </FormItem>
          </div>
        </>
      )}
      {view === VIEW_TYPE.OTP && (
        <>
          <OtpIcon />
          <div className='phone-modal-description'>
            <a onClick={handleChangePhone}>Telefon Numaramı Değiştir.</a>
            <br />
            +90(535) 273 2761 Nolu telefona gelen kodu 180 saniye içinde
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
          description='Telefon numaranız başarıyla değiştirilmiştir'
        />
      )}

      <Modal.Footer style={{ justifyContent: 'center' }}>
        {view === VIEW_TYPE.PHONE && (
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

export default PhoneModal;
