import Modal from '@/ui/modal';
import { useFormik } from 'formik';
import Cropper from '@/ui/cropper';
import validationSchema from './userInfoModal.validation';
import { getInitialValuesBySchema, fileToBase64 } from '@/utils';
import { useState } from 'react';
import Content from './userInfoModal.content';
import './userInfoModal.scss';

const aaa =
  'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';
const UserInfoModal = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImg, setCroppedImg] = useState(null);

  const handleSubmit = (val) => {
    console.log('val', val);
  };

  const handleChangeFileInput = async (e) => {
    e.preventDefault();
    const [file] = Array.from(e.target.files);
    const blob = URL.createObjectURL(file);
    setSelectedFile(blob);
  };

  const handleCropComplete = (val) => {
    setSelectedFile(null);
    setCroppedImg(val);
  };
  const initialValues = getInitialValuesBySchema(validationSchema);
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: handleSubmit
  });

  return (
    <Modal
      {...props}
      isOpen
      hideFooter={!!selectedFile}
      onSuccess={() => formik.handleSubmit()}
      title='Kullanıcı Bilgilerim'
    >
      {selectedFile ? (
        <div style={{ margin: '0px -20px' }}>
          <Cropper
            cropShape='round'
            image={selectedFile}
            onComplete={handleCropComplete}
          />
        </div>
      ) : (
        <Content
          formik={formik}
          image={croppedImg}
          handleChangeFileInput={handleChangeFileInput}
        />
      )}
    </Modal>
  );
};

export default UserInfoModal;
