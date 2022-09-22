import ProductBox from './../../ProductBox/ProductBox';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './homeCategory.module.scss';

const HomeCategory = ({ rounded }) => {
  const { i18n } = useTranslation();

  const breakpoints = {
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  }

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>

      <Container maxWidth="xxl">

        <div className={cls.homeCategory__wrapper}>

          <div className={`${cls.homeCategory__head}`}>

            <h3>Electronics</h3>

            <button>Shop Now</button>

          </div>

          <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
              <SwiperSlide>
                <ProductBox />
              </SwiperSlide>
            </Swiper>

          </div>

        </div>

      </Container>

    </div>
  )
}

export default HomeCategory