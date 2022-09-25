/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';

import cls from './brands.module.scss';

const Brands = () => {
  return (
    <Container maxWidth="xxl" className={cls.brands}>

      <h1>YOUR FAVORITE BRANDS</h1>

      <div>

        <img src="/imgs/brands/b1.avif" alt="brandImage" />
        <img src="/imgs/brands/b2.avif" alt="brandImage" />
        <img src="/imgs/brands/b3.avif" alt="brandImage" />
        <img src="/imgs/brands/b4.avif" alt="brandImage" />
        <img src="/imgs/brands/b5.avif" alt="brandImage" />
        <img src="/imgs/brands/b6.avif" alt="brandImage" />
        <img src="/imgs/brands/b7.avif" alt="brandImage" />
        <img src="/imgs/brands/b8.avif" alt="brandImage" />
        <img src="/imgs/brands/b9.avif" alt="brandImage" />
        <img src="/imgs/brands/b10.avif" alt="brandImage" />
        <img src="/imgs/brands/b11.avif" alt="brandImage" />
        <img src="/imgs/brands/b12.avif" alt="brandImage" />

      </div>

    </Container>
  )
}

export default Brands