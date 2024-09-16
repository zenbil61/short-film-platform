import Container from '@/ui/container';
import './page.scss';
import BannerSlider from '../../partials/BannerSlider';
import MoviesSlider from '../../partials/MovieSlider';
export default async function Page() {
  return (
    <div>
      <div>
        <BannerSlider />
      </div>
      <Container full style={{ paddingBottom: '300px' }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <MoviesSlider title={`${index + 1}. Film Listesi`} index={index} />
        ))}
      </Container>
    </div>
  );
}
