'use client';
import Card from '@/ui/card';
import './page.scss';
import { Col, Row } from '@/ui/grid';
import { FormItem, Input, Textarea } from '@/ui/form';
import { useFormik } from 'formik';
import { getErrorMessage } from '@/common/formik.helper';
export default function Page({ params }) {
  const handleSubmit = () => {};
  const formik = useFormik({
    // validationSchema,
    // initialValues: null,
    onSubmit: handleSubmit
  });
  return (
    <div className='detail'>
      <Row gap={20}>
        <Col className='detail-content' xs={16}>
          <div className='page'>
            <h1 className='page-title'> Bedel 2014 </h1>
            <p className='page-description'> Filmin Detaylarını Görün Düzenleyin </p>
          </div>
          <Card>
            <form onSubmit={formik.handleSubmit}>
              <FormItem title='Film Başlığı'>
                <Input
                  type='text'
                  name='name'
                  title='İçerik Adı'
                  placeholder='Lütfen Film Adını Giriniz'
                  errorMessage={getErrorMessage(formik, 'name')}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // value={formik.values.name}
                />
              </FormItem>
              <FormItem title='Film İçeriği'>
                <Input
                  type='textarea'
                  placeholder='Lütfen Film İÇeriğini Giriniz'
                />
              </FormItem>
            </form>
          </Card>
        </Col>
        <Col className='detail-sidebar' xs={8}>
          <Card
            title='Analiz'
            description='Black Sea In Turkey'
            style={{ marginTop: '70px' }}
          >
            <iframe
              style={{ width: '100%', borderRadius: '5px' }}
              src='https://www.youtube.com/embed/c6uzf8rBavA?si=PCN1R1eLMMnmdfnV&amp;controls=0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
            <div className='video-detail'>
              <div className='video-detail-item'>
                Toplam İzlenme Sayısı: <span>1250 kez</span>
              </div>
              <div className='video-detail-item'>
                Toplam İzlenme Süresi: <span>6 sa</span>
              </div>
              <div className='video-detail-item'>
                Tekil İzleyici Sayısı: <span>585 kişi</span>
              </div>
              <div className='video-detail-item'>
                Yayında Kalma Süresi: <span>1 Ay</span>
              </div>
              <div className='video-detail-item'>
                Beğeni Sayısı: <span>125</span>
              </div>
            </div>
          </Card>
          <br />
        </Col>
      </Row>
    </div>
  );
}
