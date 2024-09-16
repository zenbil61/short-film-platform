import Modal from '@/ui/modal';
import { useFormik } from 'formik';
import { Input, FormItem } from '@/ui/form';
import { getErrorMessage } from '@/common/formik.helper';
import validationSchema from './passwordModal.validation';
import { getInitialValuesBySchema } from '@/utils';
const PhoneModal = (props) => {
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
      isOpen
      onSuccess={() => formik.handleSubmit()}
      title='Şifreni Güncelle'
    >
      <form onSubmit={formik.handleSubmit}>
        <br />
        <FormItem title='Güncel Şifreniz'>
          <Input
            name='password'
            type='password'
            placeholder='Şifrenizi Girin'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormItem>
        <FormItem title='Yeni Şifre'>
          <Input
            type='password'
            placeholder='Yeni Şifrenizi Girin'
            name='newPassword'
            errorMessage={getErrorMessage(formik, 'newPassword')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
        </FormItem>
        <FormItem title='Tekrar Yeni Şifre'>
          <Input
            type='password'
            placeholder='Yeni Şifrenizi Tekrar Girin'
            name='newPassword2'
            errorMessage={getErrorMessage(formik, 'newPassword2')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.newPassword2}
          />
        </FormItem>
      </form>
    </Modal>
  );
};

export default PhoneModal;
