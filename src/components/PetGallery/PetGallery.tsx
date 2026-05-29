import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css/bundle';
import './PetGallery.css';
import { useMediaQuery } from 'react-responsive';
import { Icon } from '../Icon/Icon';

type PetGalleryProps = {
  images: string[];
  altText: string;
};

const PetGallery: React.FC<PetGalleryProps> = ({ images, altText }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const mainSwiper = React.useRef<SwiperClass | null>(null);

  const handlePrev = () => {
    mainSwiper.current?.slidePrev();
  };
  const handleNext = () => {
    mainSwiper.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="pet-gallery">
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={4}
        onSwiper={swiper => {
          mainSwiper.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        className="pet-gallery-main"
      >
        {images.map((img, index) => (
          <SwiperSlide key={img}>
            <img src={img} alt={`${altText} ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      {images.length > 1 && (
        <div className="pet-gallery-thumbs-wrapper">
          {!isMobile && (
            <button
              type="button"
              onClick={handlePrev}
              className={isBeginning ? 'pet-gallery-nav-btn--disabled' : ''}
              aria-label="Попереднє фото"
            >
              <Icon id="icon-left" size={42} height={42} />{' '}
            </button>
          )}
          <Swiper
            modules={[Thumbs, FreeMode]}
            onSwiper={setThumbsSwiper}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode
            watchSlidesProgress
            className="pet-gallery-thumbs"
          >
            {images.map((img, index) => (
              <SwiperSlide key={img}>
                <img src={img} alt={`${altText} thumbnail ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          {!isMobile && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Наступне фото"
            >
              <Icon
                id="icon-right"
                size={42}
                height={42}
                className={isEnd ? 'pet-gallery-nav-btn--disabled' : ''}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PetGallery;
