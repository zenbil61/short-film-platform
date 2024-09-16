import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Geçersiz e-mail adresi')
    .matches(
      // nokta koyulmadan kabul ediyor. bu matches kısmı nokta için
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Geçersiz e-mail adresi'
    )
    .required('Zorunlu alan'),
});
export default validationSchema;
