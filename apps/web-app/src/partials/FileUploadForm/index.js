import { FormItem, Checkbox } from '@/ui/form';
import FileUpload from '@/ui/fileUpload';
import { Row, Col } from '@/ui/grid';
import Modal from '@/ui/modal';
import { useState } from 'react';
import { getInitialValuesBySchema, fileToBase64 } from '@/utils';
import CloseSVG from '@/icons/close.svg';
const StepFour = ({ formik }) => {
  const [modal, setModal] = useState();
  const [smallImage, setSmallImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const handleSmallImageSuccess = async (file) => {
    const image = await fileToBase64(file);
    setSmallImage(image);
  };
  const handleSmallImageRemove = () => {
    setSmallImage(null);
  };
  const handleCoverImageSuccess = async (file) => {
    const image = await fileToBase64(file);
    setCoverImage(image);
  };
  const handleCoverImageRemove = () => {
    setCoverImage(null);
  };
  return (
    <>
      <FormItem.Title>Küçük Görsel Ekleyin </FormItem.Title>
      <div className='image-upload'>
        {smallImage ? (
          <div className='image-upload-area'>
            <img src={smallImage} />

            <a onClick={handleSmallImageRemove} className='image-upload-remove'>
              <CloseSVG className='icon-close' />
            </a>
          </div>
        ) : (
          <div className='image-upload-area'>
            <FileUpload
              style={{ height: '120px', width: '200px', borderRadius: '10px' }}
              onSuccess={handleSmallImageSuccess}
            />
          </div>
        )}

        <div className='image-upload-info'>
          <p className='image-upload-info-title'>
            "Yüklenen resim, videonun küçük resmi olarak kullanılır."
          </p>
          <p>
            Yüklenen resim minimum 500x500 piksel boyutunda, maksimum 1 MB
            büyüklüğünde ve JPG, PNG veya GIF formatında olmalıdır
          </p>
        </div>
      </div>
      <br />
      <br />
      <FormItem.Title>Kapak Resmi Ekleyin </FormItem.Title>
      <div className='image-upload'>
        {coverImage ? (
          <div className='image-upload-area'>
            <img src={coverImage} />

            <a onClick={handleCoverImageRemove} className='image-upload-remove'>
              <CloseSVG className='icon-close' />
            </a>
          </div>
        ) : (
          <div className='image-upload-area'>
            <FileUpload
              style={{ height: '120px', width: '200px', borderRadius: '10px' }}
              onSuccess={handleCoverImageSuccess}
            />
          </div>
        )}
        <div className='image-upload-info'>
          <p>"Yüklenen resim, videonun küçük resmi olarak kullanılır."</p>
          <p>
            Yüklenen resim minimum 500x500 piksel boyutunda, maksimum 1 MB
            büyüklüğünde ve JPG, PNG veya GIF formatında olmalıdır
          </p>
        </div>
      </div>
      <br />
      <br />
      <FormItem title='Gizli mi ?'>
        <Checkbox
          name='isPrivate'
          description='İçerik Sadece Benim Tarafımdan Görünsün'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.isPrivate}
        />
      </FormItem>
    </>
  );
};

export default StepFour;
