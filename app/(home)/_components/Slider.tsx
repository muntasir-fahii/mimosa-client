'use client';

import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { data } from '@/data/SliderContents';
import Image from 'next/image';
import Overlay from '@/components/ui/Overlay';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)]'>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        speed={500}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.heading} className='relative h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.sub}
              width={1920}
              height={1050}
              priority
              className='h-full w-full object-cover'
            />
            <Overlay />
            <div className='sp container absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.sub}</p>
              <Link
                href='/beauty-packages'
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Browse Beauty Packages
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
