import React, { useState, useRef } from 'react';

const OTPInput = ({ length, onChangeOTP }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < length - 1 && value) {
        inputs.current[index + 1].focus();
      }
      onChangeOTP(newOtp.join(''));
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChangeOTP(newOtp.join(''));
    }
  };

  const handleBackspace = (e, index) => {
    // if (e.key === 'Backspace' && !otp[index] && index > 0) {
    //   inputs.current[index - 1].focus();
    // }
    if (e.key === 'Backspace') {
      // Sadece focuslu olan input'un değerini sil
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChangeOTP(newOtp.join(''));
      // Inputu boşalttıktan sonra aynı input'ta kalmak için focusu geri döndürüyoruz
      if (index + 1 === length || (!otp[index] && index > 0)) {
        inputs.current[index - 1].focus();
      } else {
        inputs.current[index].focus();
      }
    }

    // TÜMÜNÜ SİLİYOR
    // if (e.key === 'Backspace') {
    //   // Tüm inputları temizle
    //   setOtp(Array(length).fill(''));
    //   inputs.current[0].focus(); // İlk inputa geri dön
    //   onChangeOTP(''); // Boş OTP gönder
    // }
  };
  const handleArrowKeys = (e, index) => {
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputs.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    handleBackspace(e, index);
    handleArrowKeys(e, index);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {otp.map((_, index) => (
        <input
          key={index}
          type='text'
          maxLength='1'
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            textAlign: 'center'
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
