/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import cls from './categories.module.scss';

const Categories = () => {
  const router = useRouter()

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
      slidesPerView: 8,
    },
  }

  const categories = [
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-37.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-36.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_ksa-cat-29.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_ksa-cat-30.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/49da31214043d89b2027ac6fe4dea630/ar_mb_uae-cat-33.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-43.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-15.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-27.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-09.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/feaef0fa5e11726bb597962945a54145/ar_mb_uae-cat-11.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220921/9b4f7d7ab15ed7e90e9a097c5c550a51/ar_mb_uae-cat-21.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220922/c486dc79a14ed8288d4f2c16c188f494/ar_mb_ksa-cat-04.png'
    },
    {
      name: 'Electronics',
      img: 'https://f.nooncdn.com/cms/pages/20220920/f7f3f5e3042909203d0387890e07d424/ar_mb_ksa-cat-37.png'
    },
  ]

  return (
    <div className={cls.categories}>

      <Container maxWidth="xxl">
        {/* <div className={`${cls.categories__head} ${cls.rounded}`}>

          <button>Top Categories In This Week</button>

        </div> */}

        <div className={cls.categories__allCategories}>

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            navigation
            breakpoints={breakpoints}
          >
            {categories.map((cate, idx) => (
              <SwiperSlide key={idx}>
                <div className={cls.singleCategory} onClick={() => router.push('/category/123')}>

                  <img src={cate.img} alt="categoryName" />

                  {/* <h5>{cate.name}</h5> */}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </Container>

    </div>
  )
}

export default Categories