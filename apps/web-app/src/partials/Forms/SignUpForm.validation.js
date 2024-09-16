import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Zorunlu alan'),
  email: Yup.string()
    .email('Geçersiz e-mail adresi')
    .matches(
      // nokta koyulmadan kabul ediyor. bu matches kısmı nokta için
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Geçersiz e-mail adresi'
    )
    .required('Zorunlu alan'),
  password: Yup.string().required('Zorunlu alan'),
  agreeToTerms: Yup.boolean().oneOf([true], 'Şartları kabul etmelisiniz')
});
export default validationSchema;
