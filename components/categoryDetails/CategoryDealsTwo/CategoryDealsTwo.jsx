/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './categoryDealsTwo.module.scss';

const CategoryDeals = () => {
  return (
    <div className={cls.categoryDeals}>

      <Container maxWidth="xxl">

        <h1>Mobiles & Accessories</h1>
        <h2>A variety of smartphones and accessories</h2>

        <div className={cls.btn}>

          <button>VIEW ALL</button>

        </div>

        <Grid container spacing={3}>

          <Grid item md={6}>

            <img className={cls.bigImage} src="/imgs/category/t3.avif" alt="categoryImage" />

          </Grid>

          <Grid item md={6}>

            <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>

                <img src="/imgs/category/c9.avif" alt="dealImage" />

              </Grid>

              <Grid item xs={12} sm={6}>

                <img src="/imgs/category/c10.avif" alt="dealImage" />

              </Grid>

              <Grid item xs={12} sm={6}>

                <img src="/imgs/category/c11.avif" alt="dealImage" />

              </Grid>

              <Grid item xs={12} sm={6}>

                <img src="/imgs/category/c12.avif" alt="dealImage" />

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Container>

    </div>
  )
}

export default CategoryDeals