'use client';
import Slider from '@/ui/Slider';
import { Movies, MovieItem } from '@/ui/movies';
import './MovieSlider.scss';
import React, { useEffect, useState } from 'react';

function Page({ index = 3, ...props }) {
  const [carouselCount, setCarouselCount] = useState(null);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleResize = () => {
    const width = window?.innerWidth;
    // console.log('width ', width);
    if (width > 2100 && carouselCount !== 8) setCarouselCount(8);
    else if (width > 1800 && carouselCount !== 6) setCarouselCount(6);
    else if (width > 1300 && carouselCount !== 5) setCarouselCount(5);
    else if (width > 920 && carouselCount !== 4) setCarouselCount(4);
    else if (width > 680 && carouselCount !== 3) setCarouselCount(3);
    else if (width < 680 && carouselCount !== 2) setCarouselCount(2);
    // console.log('carouselCount ', carouselCount);
  };
  const SliderLeftButton = ({ handlePrev }) => (
    <a className='custom-slider-button left' onClick={handlePrev}>
      {'<'}
    </a>
  );
  const SliderRightButton = ({ handleNext }) => (
    <a className='custom-slider-button right' onClick={handleNext}>
      {'>'}
    </a>
  );

  return (
    <>
      <Movies {...props}>
        <Slider
          style={{ zIndex: 99 - index }}
          className='movies-slider'
          carouselItemCount={carouselCount}
          carouselType='scene'
          carousel={true}
          waitSlide={true}
          pager={true}
          buttons={true}
          lazy={false}
          gap={8}
          autoPlay={false}
          autoResize={true}
          loop={false}
          mobileMode='scroll'
          leftButtonTemplate={SliderLeftButton}
          rightButtonTemplate={SliderRightButton}
        >
          <MovieItem
            src='/images/film_5.png'
            index={0}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={1}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={2}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={3}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_3.png'
            index={4}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={5}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={6}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={7}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_2.png'
            index={8}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_3.png'
            index={9}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={10}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={11}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={12}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_2.png'
            index={13}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_3.png'
            index={14}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={15}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={16}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={17}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_2.png'
            index={18}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_3.png'
            index={19}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={20}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={21}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={22}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_2.png'
            index={23}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_3.png'
            index={24}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_1.png'
            index={25}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_5.png'
            index={26}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_4.png'
            index={27}
            title='Şeytanın  Düşmanı'
          />
          <MovieItem
            src='/images/film_2.png'
            index={28}
            title='Şeytanın  Düşmanı'
          />
        </Slider>
      </Movies>
    </>
  );
}

export default Page;
