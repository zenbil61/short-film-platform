'use client';

import { useFormik } from 'formik';
import validationSchema from './NewContentForm.validation';
import { getInitialValuesBySchema, fileToBase64 } from '@/utils';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import './NewContentForm.scss';
import { useState } from 'react';
import Stepper from '@/ui/stepper';
import Button from '@/ui/button';

function NewContentForm({ onSubmit }) {
  const initialValues = getInitialValuesBySchema(validationSchema, {
    hidden: false
  });
  const [video, setVideo] = useState();
  const [step, setStep] = useState(1);

  const handleSubmit = (val) => {
    console.log('result', val);
  };
  const handleVideoSuccess = async (file) => {
    console.log('file', file);
    // const videoURL = URL.createObjectURL(file);
    setVideo(file);
    setStep(2);
  };
  const handleChangeStep = (nextStep) => {
    const isNext = nextStep > step;
    const isPrev = nextStep < step;
    if (!video && isNext) {
      // return;
    }
    setStep(nextStep);
  };
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: handleSubmit
    // validateOnChange: true, // Değişikliklerde doğrulamayı devre dışı bırak
    // validateOnBlur: true, // Blur olayında doğrulamayı devre dışı bırak
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stepper>
        <Stepper.Item step={1} current={step} onClick={handleChangeStep}>
          Dosyanızı Yükleyin
        </Stepper.Item>
        <Stepper.Item step={2} current={step} onClick={handleChangeStep}>
          Film Bilgileri
        </Stepper.Item>
        <Stepper.Item step={3} current={step} onClick={handleChangeStep}>
          Ayarlar
        </Stepper.Item>
        <Stepper.Item step={4} current={step} onClick={handleChangeStep}>
          Önizleme
        </Stepper.Item>
      </Stepper>
      {step !== 1 && (
        <div className='file-detail'>
          <span className='file-detail-name'>{video?.name}</span>
          <span className='file-detail-info-text'>- Yükleme Yüzdesi: </span>
          <span className='file-detail-remaining'>
            %49... (41 saniye kaldı)
          </span>
          <span></span>
        </div>
      )}
      <div className='ayrac'></div>
      {step === 1 && (
        <StepOne onVideoSuccess={handleVideoSuccess} formik={formik} />
      )}
      {step === 2 && <StepTwo formik={formik} />}
      {step === 3 && <StepThree formik={formik} />}
      {step === 4 && <StepFour formik={formik} />}

      <div className='form-footer'>
        {step !== 4 ? (
          <Button size='md' onClick={() => setStep(step + 1)}>
            'Devam Et
          </Button>
        ) : (
          <Button size='md' type='submit'>
            Yayınla
          </Button>
        )}
      </div>
    </form>
  );
}

export default NewContentForm;
