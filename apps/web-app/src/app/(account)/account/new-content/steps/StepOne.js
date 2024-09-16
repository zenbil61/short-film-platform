import { Row, Col } from '@/ui/grid';
import FileUpload from '@/ui/fileUpload';
import { ACCEPT_VIDEO } from '@/common/enum';
const StepOne = ({ onImageSuccess, onVideoSuccess }) => {
  return (
    <>
      <Row>
        <Col>
          <FileUpload
            id='video-upload'
            style={{ height: '400px' }}
            onSuccess={onVideoSuccess}
            accept={ACCEPT_VIDEO}
          />
        </Col>
      </Row>
    </>
  );
};

export default StepOne;
