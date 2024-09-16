import * as Yup from 'yup';

const validationSchema = Yup.object({
  userName: Yup.string().required('Zorunlu alan'),
  fullName: Yup.string().required('Zorunlu alan'),
  bio: Yup.string()
});
export default validationSchema;
