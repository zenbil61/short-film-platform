export const getErrorMessage = (formik, key) => {
  if (formik.touched[key] && formik.errors[key]) return formik.errors[key];
  return '';
};
