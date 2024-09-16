import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Zorunlu alan'),
  description: Yup.string().required('Zorunlu alan'),
  isPrivate: Yup.bool().required('Zorunlu alan'),
  type: Yup.bool().required('Zorunlu alan'),
});
export default validationSchema;
