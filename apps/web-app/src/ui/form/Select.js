import './Select.scss';
import Select from 'react-select';
const CustomSelect = ({ options, name, formik, ...props }) => {
  const handleChange = (value) => {
    formik.setFieldValue(name, value);
  };
  const getValue = () => {
    return options?.find((x) => x?.label === 'name')?.value;
  };
  return (
    <Select
      {...props}
      options={options}
      name={name}
      classNamePrefix='s-select'
      value={getValue()}
      placeholder='Lütfen Seçiniz'
      onChange={handleChange}
    />
  );
};

export default CustomSelect;
