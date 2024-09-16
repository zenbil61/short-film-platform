'use client';
import Input from '@/ui/form/Input';
import Button from '@/ui/button';
import { useFormik } from 'formik';
import validationSchema from './SignUpForm.validation';
import { getInitialValuesBySchema } from '@/utils';
import FormHeader from '@/ui/form/FormHeader';

function SignUpForm() {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const getErrorMessage = (key) => {
    if (formik.touched[key] && formik.errors[key]) return formik.errors[key];
    return '';
  };
  const initialValues = getInitialValuesBySchema(validationSchema);
  const formik = useFormik({
    validationSchema,
    initialValues,
    // validateOnChange: true, // Değişikliklerde doğrulamayı devre dışı bırak
    // validateOnBlur: true, // Blur olayında doğrulamayı devre dışı bırak
    onSubmit: handleSubmit
  });

  return (
    <>
      <FormHeader
        title='Üye Ol'
        description='Binlerce Kısa filmi hemen şimdi ücretsiz izle'
      />
      <form onSubmit={formik.handleSubmit}>
        <Input
          dark={true}
          type='text'
          name='fullName'
          errorMessage={getErrorMessage('fullName')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          title='Ad Soyad'
        />
        <Input
          dark={true}
          type='text'
          name='email'
          title='E-posta'
          errorMessage={getErrorMessage('email')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          dark={true}
          type='password'
          name='password'
          errorMessage={getErrorMessage('password')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          title='Şifre'
        />
        <Input
          dark={true}
          type='checkbox'
          name='agreeToTerms'
          errorMessage={getErrorMessage('agreeToTerms')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.agreeToTerms}
          chcDescription='Üyeliz Sözleşmesini okudum kabul ettim'
        />
        <Button size='lg' type='submit' full>
          Kayıt Ol
        </Button>
      </form>
    </>
  );
}

export default SignUpForm;
