import Cropper from 'react-easy-crop';
import { useState, useCallback } from 'react';
import { getCroppedImg } from './cropper.helper';
import './index.scss';
import Button from '../button';
const ImageCropper = ({
  image,
  onComplete,
  onError,
  cropShape,
  maxZoom,
  minZoom,
  aspect = 1,
  showGrid = false,
  ...props
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const showCroppedImage = async () => {
    try {
      const imgBase64 = await getCroppedImg(image, croppedAreaPixels);
      //console.log('aaaa', await fileToBase64(image));
      onComplete(imgBase64);
    } catch (e) {
      onError && onError(e);
      console.error(e);
    }
  };
  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div className='s-cropper'>
      <div className='s-cropper-wrapper'>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          maxZoom={maxZoom}
          minZoom={minZoom}
          showGrid={showGrid}
          cropShape={cropShape}
          aspect={aspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={handleCropComplete}
        />
      </div>

      <div className='s-cropper-controls'>
        <div className='s-cropper-controls-range'>
          <input
            type='range'
            value={zoom}
            className='zoom-range'
            min={1}
            max={3}
            step={0.1}
            aria-labelledby='Zoom'
            onChange={(e) => {
              setZoom(e.target.value);
            }}
          />
        </div>
        <div className='s-cropper-controls-action'>
          <Button onClick={showCroppedImage}>kırp</Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
