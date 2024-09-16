import * as Yup from 'yup';

const validationSchema = Yup.object({
  password: Yup.string().required('Zorunlu alan'),
  newPassword: Yup.string().required('Zorunlu alan'),
  newPassword2: Yup.string().required('Zorunlu alan')
});
export default validationSchema;
