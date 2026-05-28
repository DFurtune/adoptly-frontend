import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css/bundle';
import './PetGallery.css';

type PetGalleryProps = {
  images: string[];
  altText: string;
};

const PetGallery: React.FC<PetGalleryProps> = ({ images, altText }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="pet-gallery">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        className="pet-gallery-main"
      >
        {images.map((img, index) => (
          <SwiperSlide key={img}>
            <img src={img} alt={`${altText} ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
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
    </div>
  );
};

export default PetGallery;
