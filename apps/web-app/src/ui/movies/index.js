import './index.scss';
import Link from 'next/link'

export const Movies = ({ title, showAll = true, children }) => {
  return (
    <div className='movies'>
      {title ? (
        <h1 className='movies-title'>
          {title} {showAll ? <a>Daha Fazlasını Gör</a> : null}
        </h1>
      ) : null}
      <div className='movies-list'>{children}</div>
    </div>
  );
};

export const MovieItem = ({ title, src, index }) => (
  <div className='movies-list-item' data-index={index}>
    <img src={src} alt='Örnek Resim' />
    <div className='movies-list-item-details'>
      <h2>{title}</h2>
      <p>
        Şeytanın Düşmanı, Vatikan'ın baş şeytan kovucusu olarak görev yapan
        rahip Gabriele Amorth'un hayatına odaklanıyor. Gabriel Amorth, hayatı
        boyunca yüz binden fazle şeytan çıkarma gerçekleştiren
      </p>
      <Link href="movie" className='watch-button'>Hemen İzle</Link>
    </div>
  </div>
);
