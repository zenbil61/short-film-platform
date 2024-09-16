import { Input, FormItem } from '@/ui/form';
import { getErrorMessage } from '@/common/formik.helper';

const Content = ({ handleChangeFileInput, image, formik }) => {
  const openFileUpload = () => {
    document.getElementById('pp-file').click();
  };
  return (
    <>
      <div className='d-flex'>
        <div className='profile-picture'>
          {!image ? (
            <>
              <div onClick={openFileUpload} className='img-placeholder'>
                +
              </div>
              <a onClick={openFileUpload}>Yeni Profil Resmi</a>
            </>
          ) : (
            <>
              <img src={image} />
              <a onClick={openFileUpload}>Resmi düzenle</a>
            </>
          )}

          <input
            onChange={handleChangeFileInput}
            id='pp-file'
            type='file'
            accept='.'
          />
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <FormItem title='Kullanıcı Adı'>
          <Input
            name='userName'
            placeholder='Kullanıcı Adınızı Girin'
            errorMessage={getErrorMessage(formik, 'userName')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
        </FormItem>
        <FormItem title='Ad Soyad'>
          <Input
            name='fullName'
            placeholder='Adınızı Girin'
            errorMessage={getErrorMessage(formik, 'fullName')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </FormItem>
        <FormItem title='Hakkımda'>
          <Input
            name='bio'
            type='textarea'
            placeholder='Hakkımdaki bilgiler'
            errorMessage={getErrorMessage(formik, 'bio')}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.bio}
          />
        </FormItem>
      </form>
    </>
  );
};

export default Content;
