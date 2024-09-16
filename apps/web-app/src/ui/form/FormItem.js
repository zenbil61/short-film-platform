import InfoIconSVG from '@/icons/info.svg';
import Tooltip from '@/ui/tooltip';
const FormTitle = ({ children, textCenter, infoText }) => (
  <h4 className={`s-form-title ${textCenter ? 'center' : ''}`}>
    {children}
    {infoText && (
      <Tooltip text={infoText}>
        <InfoIconSVG className='s-form-title-icon' />
      </Tooltip>
    )}
  </h4>
);
const FormItem = ({ title, infoText, textCenter, children }) => (
  <>
    <div className={`s-form-item `}>
      {title && (
        <FormTitle infoText={infoText} textCenter={textCenter}>
          {title}
        </FormTitle>
      )}
      {children}
    </div>
  </>
);

FormItem.Title = FormTitle;

export default FormItem;
