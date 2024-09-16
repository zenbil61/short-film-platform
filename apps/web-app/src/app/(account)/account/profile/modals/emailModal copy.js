import Modal from '@/ui/modal';
import { useFormik } from 'formik';
import { Input, FormItem } from '@/ui/form';
import { getErrorMessage } from '@/common/formik.helper';
import validationSchema from './emailModal.validation';
import { getInitialValuesBySchema, fileToBase64 } from '@/utils';
import EmailSVG from '@/icons/email.svg';
import './emailModal.scss';

const EmailModal = (props) => {
  const handleSubmit = (val) => {
    console.log('val', val);
  };
  const initialValues = getInitialValuesBySchema(validationSchema);
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: handleSubmit
    // validateOnChange: true, // Değişikliklerde doğrulamayı devre dışı bırak
    // validateOnBlur: true, // Blur olayında doğrulamayı devre dışı bırak
  });
  return (
    <Modal
      {...props}
      onSuccess={() => formik.handleSubmit()}
      title='Email Güncelle'
    >
      <form onSubmit={formik.handleSubmit}>
        <div className='otp-icon'>
          <div className='otp-icon-wrapper'>
            <EmailSVG />
          </div>
        </div>
        <div className='email-modal-description'>
          Epoasta adresini değiştirdikten sonra bu işlem geri alınamaz. Eposta
          adresin kimseye gösterilmez. Güncel Eposta adresin
          <b> mustafa@zenbil.com</b>
        </div>
        <br />
        <FormItem title='Güncel Adresiniz'>
          <Input disabled value='mustafa@zenbil.com' />
        </FormItem>
        <FormItem title='Yeni Mail Adresiniz'>
          <Input
            name='email'
            placeholder='Email Adresinizi Girin'
            errorMessage={getErrorMessage(formik, 'email')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormItem>
      </form>
    </Modal>
  );
};

export default EmailModal;
