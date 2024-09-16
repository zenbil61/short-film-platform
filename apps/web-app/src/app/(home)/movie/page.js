import './page.scss';
import SavedSVG from '@/icons/saved.svg';
import SearchSVG from '@/icons/search.svg';
import ProfileSVG from '@/icons/profile.svg';
import ShareSVG from '@/icons/share.svg';
import MoviesSlider from '@/partials/MovieSlider';
import Container from '@/ui/container';

export default async function Page({ params }) {
  const img =
    'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Those_About_To_Die_CS_UI_CO2_Hopkins/0eb4762c-9c36-4820-83cf-c2aef167a4de._UR3840,1440_SX2160_FMjpg_.jpeg';

  return (
    <>
      <div className='movie'>
        <div
          className='movie-header'
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className='movie-header-detail'>
            <img src='https://blutv-images.mncdn.com/q/t/i/bluv2/100/0x0/66bc79a3866ac30a24f36d3a' />
            <p>
              Özgür'ün önceki hikâyelerde kendisine kazık atan, dostum dediği
              kişilerle hesaplaşmasını konu alıyor. Özgür ve Sabri aralarındaki
              husumete son verebilmek ve hesaplaşabilmek için bir mekanda
              toplanırlar. Tayfun nişanlanmadan son bir kumar gecesi organize
              eder. Özgür’ü de bu özel gecede kendisine eşlik etmesi için davet
              eder. Vural ve adamlarının mekâna gelmesi işleri değiştirecektir.
            </p>
            <div className='movie-header-detail-badges'>
              <span className='item year'>2024</span>
              <span className='item time'>1 Sa. 37 dk</span>
              <span className='item age'>18+</span>
              <a className='item category'>Komedi</a>
              <a className='item category'>Romantik</a>
            </div>
            <div className='movie-header-detail-actions'>
              <a className='watch-button lg'> Hemen İzle</a>
              <a className='action'>
                {' '}
                <ShareSVG />
              </a>
              <a className='action'>
                {' '}
                <SearchSVG />
              </a>
              <a className='action'>
                {' '}
                <ProfileSVG />
              </a>
              <a className='action'>
                {' '}
                <SavedSVG />
              </a>
            </div>
          </div>
        </div>

        <div className='movie-overlay'></div>
      </div>
      <Container full style={{ paddingBottom: '300px' }}>
        <div className='others'>
          <MoviesSlider
            title='İzleyiciler Şunlarıda Seyretti'
            showAll={false}
          />
        </div>
      </Container>
    </>
  );
}
