'use client'
import React, { useRef, useState, useEffect } from 'react';

import './index.scss';
import SlideItem from './SlideItem';
import CarouselItem from './CarouselItem';
import useSwipe from './useSwipe'; // Hook'un doğru yolu ile import edilmesini sağlayın
import useIsMobile from './useIsMobile'; // Hook'un doğru yolu ile import edilmesini sağlayın
import useEffectOnChange from './useEffectOnChange'; // Hook'un doğru yolu ile import edilmesini sağlayın
import usePrevious from './usePrevious'; // usePrevious hook'unu doğru yolu kullanarak içe aktarın
// CSS3 le kolay bi şekilde yapılabiliyor ama ie çalışmıyor.
let isWorking = false;
const nodelistToArray = (nodeList) => {
  Array.prototype.slice.call(nodeList);
};

const Slider = ({
  // id,
  pagerTemplate: PagerTemplate, // Component : custom pager(navigation) tamplate
  leftButtonTemplate: LeftButtonTemplate, // Component : custom left button
  rightButtonTemplate: RightButtonTemplate, // Component : custom right button
  onSliderLoad, //Callback : slide load olduğunda
  onSlideBefore, // Callback : geçiş yapılmadan önce
  onSlideAfter, // Callback : geçiş yapıldıktan sonra
  animationTime = 500, // geçiş süresi
  autoPlay = true, // otomatik geçiş
  autoPlayTimer = 4000, // otomatik geçiş süresi
  lazy = false, // resimler lazy çalışsın mı
  buttons = true, // Sağ, Sol butonlar gözüksün
  loop = true, // döngü
  waitSlide = true, // slide geçişi sırasında peşpeşe tıklarsa animasyonun bitişini beklesin
  pager = true, // pager var.
  carousel = false, // carousel mi
  carouselType = 'item',
  gap = 5, // carousel arasındaki padding
  autoResize = false, // sayfa resize oldukça ona göre item sizelar tekrar hesaplansın mı
  carouselItemCount = 4, // carousel modunda slide kaça bölüncek-
  mobileMode = 'swipe', // swipe or scroll
  children,
  className = '',
  ...props
}) => {
  // const calcIndex = (itemCount) => {
  //   if (carousel && carouselType === 'item') return children.length - itemCount;
  //   else return Math.ceil(children.length / itemCount) - 1 || 0;
  // };
  const calcIndex = (itemCount) => {
    if (itemCount <= 0) {
      throw new Error('itemCount must be greater than zero.');
    }
    if (children.length === 0) {
      return 0; // veya uygun bir varsayılan değer
    }
    if (!carousel) {
      return children.length - 1;
    }
    if (carousel && carouselType === 'item') {
      return children.length - itemCount;
    } else {
      return Math.max(0, Math.ceil(children.length / itemCount) - 1);
    }
  };

  const [state, setState] = useState({
    activeIndex: 0,
    totalIndex: calcIndex(carouselItemCount || 1),
    viewedIndex: [0]
  });
  const [itemWidth, setWidth] = useState(carousel ? 0 : window?.innerWidth);
  const handleResize = () => {
    if (carousel) {
      setWidth(sliderRef.current.offsetWidth / carouselItemCount);
    } else {
      setWidth(sliderRef.current.offsetWidth / 1);
    }
  };
  useEffect(() => {
    onSliderLoad && onSliderLoad();
    lazy && lazyInit();
  }, []);

  useEffectOnChange(() => {
    handleResize();
    setState({
      ...state,
      totalIndex: calcIndex(carouselItemCount || 1),
      activeIndex: 0
    });

    autoResize && window?.addEventListener('resize', handleResize);
    return () => {
      autoResize && window?.removeEventListener('resize', handleResize);
    };
  }, [carouselItemCount]);
  useEffect(() => {
    if (autoPlay) {
      let interval = setInterval(() => handleNext(), autoPlayTimer);
      return () => clearInterval(interval);
    }
  });

  const sliderRef = useRef(null);
  const setImage = (image) => {
    const imageSrc = image.getAttribute('data-src');
    if (imageSrc) {
      image.setAttribute('src', imageSrc);
      image.removeAttribute('data-src');
    }
  };
  // LAZY CONTROL
  const lazyLoadImage = ({ index }) => {
    const image = sliderRef.current.querySelectorAll('.slide-item img')[index];
    setImage(image);
  };

  const lazyLoadCarouselImage = ({ index }) => {
    let items = nodelistToArray(
      sliderRef.current.querySelectorAll('.carousel-item')
    );

    if (carouselType === 'scene') {
      let itemInScene = items.slice(
        carouselItemCount * index,
        carouselItemCount * index + carouselItemCount
      );

      itemInScene.forEach((item) => {
        let imagesInItem = nodelistToArray(item.querySelectorAll('[data-src]'));
        imagesInItem.forEach((_image) => setImage(_image));
      });
    } else {
      const nextItem =
        sliderRef.current.querySelectorAll('.carousel-item')[
          carouselItemCount - 1 + index
        ];
      let imagesInNextItem = nodelistToArray(
        nextItem.querySelectorAll('[data-src]')
      );
      imagesInNextItem.forEach((_image) => setImage(_image));
    }
  };
  const lazyInit = () => {
    if (carousel) {
      let firstItems = nodelistToArray(
        sliderRef.current.querySelectorAll('.carousel-item')
      );
      firstItems = firstItems.slice(0, carouselItemCount);

      firstItems.forEach((carouselItem) => {
        let images = nodelistToArray(
          carouselItem.querySelectorAll('[data-src]')
        );
        images.forEach((image) => setImage(image));
      });
    } else {
      const firsSlideImages = sliderRef.current.querySelectorAll(
        '.slide-item:first-child [data-src]'
      );
      firsSlideImages.forEach((image) => setImage(image));
    }
  };

  // SLIDE ACTIONS
  const goToSlide = (index) => {
    if (waitSlide && isWorking) return;
    isWorking = true;

    onSlideBefore && onSlideBefore();

    lazy &&
      (carousel ? lazyLoadCarouselImage({ index }) : lazyLoadImage({ index }));

    if (index > state.totalIndex) index = state.totalIndex;
    else if (index < 0) index = 0;

    const isViewed = state.viewedIndex.some((x) => x === index);

    setState({
      ...state,
      activeIndex: index,
      viewedIndex: !isViewed
        ? [...state.viewedIndex, index]
        : [...state.viewedIndex]
    });
    setTimeout(() => {
      onSlideAfter &&
        onSlideAfter({
          isFirstView: !isViewed,
          activeIndex: state.activeIndex
        });
      isWorking = false;
    }, animationTime);
  };
  const handleNext = () => {
    // son indexten ileri gitmeye çalışırsa en başa atar
    const isLast = state.activeIndex >= state.totalIndex;
    const newIndex = isLast
      ? loop
        ? 0
        : state.activeIndex
      : state.activeIndex + 1;
    goToSlide(newIndex);
  };
  const handlePrev = () => {
    // 0. indexten geri geliyorsa en sona atar
    const isFirst = state.activeIndex === 0;
    const newIndex = isFirst
      ? loop
        ? state.totalIndex
        : 0
      : state.activeIndex - 1;
    goToSlide(newIndex);
  };

  // SLİDE SWİPES
  const handleSwipeLeft = () => {
    handleNext();
  };

  const handleSwipeRight = () => {
    handlePrev();
  };
  useSwipe(sliderRef, handleSwipeLeft, handleSwipeRight);
  const isMobile = useIsMobile();

  // DEFAULT TEMPLATES
  const SliderPager = () => {
    const buttons = [];
    for (let i = 0; i < state.totalIndex + 1; i++) {
      buttons.push(
        <div
          onClick={() => goToSlide(i)}
          className={
            'slider-pager-button ' + (state.activeIndex === i ? ' active' : '')
          }
          key={i}
        ></div>
      );
    }

    return (
      <div className='slider-pager-buttons'>{buttons.map((btn) => btn)}</div>
    );
  };

  const SliderLeftButton = () => {
    const isFirst = state.activeIndex === 0;
    if (!loop & isFirst) return null;
    if (LeftButtonTemplate)
      return <LeftButtonTemplate handlePrev={handlePrev} />;
    return (
      <a className='slider-button left' onClick={handlePrev}>
        <span>{'<'}</span>
      </a>
    );
  };
  const SliderRightButton = () => {
    const isLast = state.activeIndex >= state.totalIndex;
    if (!loop & isLast) return null;
    if (RightButtonTemplate)
      return <RightButtonTemplate handleNext={handleNext} />;
    return (
      <a className='slider-button right' onClick={handleNext}>
        <span>{'>'}</span>
      </a>
    );
  };
  const calcTranslate = () => {
    if (carousel) {
      if (carouselType === 'item') return state.activeIndex * itemWidth;
      else return state.activeIndex * (carouselItemCount * itemWidth);
    } else {
      return state.activeIndex * itemWidth;
    }
  };
  const modifyChildren = (child) => {
    if (carousel) {
      return (
        <CarouselItem gap={gap} width={itemWidth}>
          {React.cloneElement(child, child.props)}{' '}
        </CarouselItem>
      );
    } else {
      return (
        <SlideItem width={itemWidth}>
          {React.cloneElement(child, child.props)}{' '}
        </SlideItem>
      );
    }
  };
  const getTransformStyle = () => {
    if (!isMobile || (isMobile && mobileMode === 'swipe')) {
      return {
        transform: `translateX(-${calcTranslate()}px)`,
        width: `${children.length * itemWidth}px`
      };
    } else {
      return {
        overflow: 'auto'
      };
    }
  };
  const attributes = {};
  if (carousel) attributes['data-carousel-count'] = carouselItemCount;

  return (
    <div
      className={`slider ${className}`}
      ref={sliderRef}
      {...attributes}
      {...props}
    >
      {buttons && (!isMobile || (isMobile && mobileMode === 'swipe')) && (
        <>
          <SliderLeftButton />
          <SliderRightButton />
        </>
      )}
      <div className='slider-wrapper' style={getTransformStyle()}>
        {React.Children.map(children, (child) => modifyChildren(child))}
      </div>

      {pager &&
        !isMobile &&
        (!PagerTemplate ? (
          <SliderPager />
        ) : (
          <PagerTemplate
            goToSlide={goToSlide}
            activeIndex={state.activeIndex}
            itemWidth={itemWidth}
          />
        ))}
    </div>
  );
};

export default Slider;
