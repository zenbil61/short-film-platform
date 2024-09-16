'use client';
import Input from '@/ui/form/Input';
import Button from '@/ui/button';
import { getErrorMessage } from '@/common/formik.helper';
import { useFormik } from 'formik';
import validationSchema from './SignInForm.validation';
import { getInitialValuesBySchema } from '@/utils';
import Link from 'next/link';
import FormHeader from '@/ui/form/FormHeader';

function SignInForm({ onSubmit }) {
  const initialValues = getInitialValuesBySchema(validationSchema);
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: onSubmit
    // validateOnChange: true, // Değişikliklerde doğrulamayı devre dışı bırak
    // validateOnBlur: true, // Blur olayında doğrulamayı devre dışı bırak
  });

  return (
    <form className='dark-form' onSubmit={formik.handleSubmit}>
      <FormHeader title='Üye Ol' />

      <Input
        dark={true}
        type='text'
        name='email'
        title='E-posta'
        errorMessage={getErrorMessage(formik, 'email')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        dark={true}
        type='password'
        name='password'
        errorMessage={getErrorMessage(formik, 'password')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        title='Şifre'
      />
      <Input
        dark={true}
        type='checkbox'
        name='agreeToTerms'
        errorMessage={getErrorMessage(formik, 'agreeToTerms')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.agreeToTerms}
        chcDescription='Beni Hatırla'
      />
      <div className='d-flex space-beetwen mb-5'>
        <Link href='#'>Şifremi Unuttum</Link>

        <Link href='#'>Üye Ol</Link>
      </div>

      <Button size='lg' type='submit' full>
        Kayıt Ol
      </Button>
    </form>
  );
}

export default SignInForm;
