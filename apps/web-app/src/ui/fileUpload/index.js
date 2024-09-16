'use client';
import UploadSVG from '@/icons/file-upload.svg';
import ArrowDownSVG from '@/icons/arrow-down.svg';
import { useState, useRef } from 'react';
import { validateImage, getBase64ImageDimensions } from '@/utils';
import './index.scss';

const FileUpload = ({ max = 1, accept = '', onError, onSuccess, ...props }) => {
  const [isDragEntered, setDragEntered] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const refFileupload = useRef();
  const clear = (e) => {
    e?.target?.classList?.remove('active');
    setDragEntered(false);
  };
  const handleClickUpload = () => {
    refFileupload.current.click();
  };
  const handleDrag = ({ e, event }) => {
    e.preventDefault();
    const isDragEnter = event === 'enter'; // enter or leave

    if (isDragEnter) e.target.classList.add('active');
    else e.target.classList.remove('active');

    setDragEntered(isDragEnter);
  };
  const handleDrop = (e) => {
    setLoading(true);
    e.preventDefault();
    const isCountError = e.dataTransfer.files.length > max;
    if (isCountError) {
      alert('sınırı aştınız');
      clear(e);
      return;
    }
    refFileupload.current.files = e.dataTransfer.files;
    refFileupload.current.dispatchEvent(new Event('change', { bubbles: true }));
    setDragEntered(true);
    e.target.dispatchEvent(new Event('dragleave'));
    clear(e);
  };

  const UploadIcons = () => {
    return (
      <div className='s-upload-area-icon'>
        {!isDragEntered ? <UploadSVG /> : <ArrowDownSVG />}
      </div>
    );
  };
  const UploadContent = () => {
    return !isDragEntered ? (
      <div className='s-upload-area-text'>
        Buraya sürükle veya
        <a>Yükle</a>
      </div>
    ) : (
      <div className='s-upload-area-text'>
        <a>Buraya Bırak </a>
      </div>
    );
  };
  const handleChangeFileInput = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isMultiple = max > 1;
    const files = Array.from(e.target.files || e.dataTransfer.files);
    // const isValidImage = await validateImage(file, {
    //   maxMb: 5,
    //   maxWidth: 1000,
    //   maxHeight: 1000
    // });
    // if (!isValidImage) {
    //   alert('resimler valid değil');
    //   return;
    // }
    // const isValid = onValidation();
    // if (!isValid) {
    //   return;
    // }
    onSuccess(isMultiple ? [files] : files[0]);
    // setLoading(false);

    // const reader = new FileReader();
    // reader.onload = async (event) => {
    //   onSuccess(event.target.result);
    //   //setImagePath(event.target.result);
    //   // const dimensions = await getBase64ImageDimensions(e.target.result);
    // };
    // reader.readAsDataURL(file);
  };
  return (
    <div
      className='s-upload-area'
      {...props}
      onClick={(e) => handleClickUpload(e)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => handleDrag({ e, event: 'leave' })}
      onDragEnter={(e) => handleDrag({ e, event: 'enter' })}
      onDrop={handleDrop}
    >
      {isLoading ? (
        <div className='loader'></div>
      ) : (
        <>
          <UploadIcons />
          <UploadContent />
        </>
      )}

      <input
        style={{ opacity: '0', height: '0px' }}
        type='file'
        accept={accept}
        ref={refFileupload}
        onChange={handleChangeFileInput}
      />
    </div>
  );
};
export default FileUpload;
