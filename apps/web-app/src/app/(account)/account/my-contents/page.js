'use client'
import Container from '@/ui/container';
import List from '@/ui/list';
import { useRouter } from 'next/navigation'

export default function Page({ params }) {
  const img =
    'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Those_About_To_Die_CS_UI_CO2_Hopkins/0eb4762c-9c36-4820-83cf-c2aef167a4de._UR3840,1440_SX2160_FMjpg_.jpeg';
    const router = useRouter()

  return (
    <div className='page'>
      <h1 className='page-title'> İçeriklerim </h1>
      <p className='page-description'>
        Yüklediğim Film / Dizi / Belgesellerim{' '}
      </p>
      <div className='page-content'>
        <List>
          <List.ImageItem
            onClick={()=> router.push('/account/my-contents/6123')}
            src={img}
            title='Bedel 2048 X'
            description='Su Krizi konulu Kısa film'
          >
            <div style={{ color: 'blue', marginTop: '10px', textDecoration: 'Italic' }}>
              <span> Beğeni: 20</span>
              <span> Fav: 20</span>
              <span> İzlenme: 20</span>
            </div>
          </List.ImageItem>
          <List.ImageItem
            src={img}
            title='Bedel 2048'
            description='Su Krizi konulu Kısa film'
          />
          <List.ImageItem
            src={img}
            title='Bedel 2048'
            description='Su Krizi konulu Kısa film'
          />
          <List.ImageItem
            src={img}
            title='Bedel 2048'
            description='Su Krizi konulu Kısa film'
          />
        </List>
      </div>
    </div>
  );
}
