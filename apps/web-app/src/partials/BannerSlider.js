'use client';
import Slider from '@/ui/Slider';
import './BannerSlider.scss';
import React from 'react';

export default function Profile() {
  // useEffect(() => {}, []);
  const SliderLeftButton = ({ handlePrev }) => (
    <a className='banner-slider-button left' onClick={handlePrev}>
      {'<'}
    </a>
  );
  const SliderRightButton = ({ handleNext }) => (
    <a className='banner-slider-button right' onClick={handleNext}>
      {'>'}
    </a>
  );
  const img =
    'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Those_About_To_Die_CS_UI_CO2_Hopkins/0eb4762c-9c36-4820-83cf-c2aef167a4de._UR3840,1440_SX2160_FMjpg_.jpeg';

  const img2 =
    'https://m.media-amazon.com/images/S/sonata-images-prod/TR_TTNKM_CS_UI/585ca4b8-86ec-45cc-8542-a5fb02fd8672._UR3840,1440_SX2880_FMwebp_.jpeg';
  const img3 =
    'https://m.media-amazon.com/images/S/sonata-images-prod/EUX_Jackpot_CS_UI/a96a4738-fc39-4f00-b2f6-65dc6a065c13._UR3840,1440_SX720_FMwebp_.jpeg';

  const SlideItem = ({ picture }) => (
    <div
      className='banner-slider-item'
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className='banner-slider-item-details'>
        <img src='https://blutv-images.mncdn.com/q/t/i/bluv2/100/0x0/66bc79a3866ac30a24f36d3a' />
        <p>
          Harrison Ford'un başrolünde olduğu, Ridley Scott’ın başyapıtlarından
          ve distopik türün öncülerinden olan film.
        </p>
        <a className='watch-button'>Hemen İzle</a>
      </div>
      <div className='gradient-overlay'></div>
    </div>
  );
  return (
    <Slider
      carousel={false}
      pager={true}
      buttons={true}
      autoPlay={true}
      autoResize={true}
      loop={true}
      className='banner-slider'
      leftButtonTemplate={SliderLeftButton}
      rightButtonTemplate={SliderRightButton}
      style={{ overflow: 'hidden' }}
    >
      <SlideItem picture={img} />
      <SlideItem picture={img2} />
      <SlideItem picture={img3} />
    </Slider>
  );
}
